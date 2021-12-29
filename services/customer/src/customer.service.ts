import { Injectable } from '@nestjs/common';
import { Customer as CustomerModel } from "@prisma/client"
import CustomersDbService from '../db/customers.db.module';
import { RpcException } from '@nestjs/microservices';
import CustomerDto from '../../../common/dto/customer.dto';
import CustomerEntity from './entities/customer.entity';
import { ICustomerService } from './interfaces/customer.service.interface';
import CustomerNotFoundException from '../exceptions/customer.not.found.exception';
import CustomerBadRequestException from '../exceptions/customer.bad.request.exception';

@Injectable()
export class AppService implements ICustomerService {
    private readonly db: CustomersDbService
    constructor() {
        this.db = new CustomersDbService()
        this.db.client.$connect()
    }

    async getAllCustomers(): Promise<CustomerModel[]> {
        return await this.db.client.customer.findMany({
            include: {
                cars: true
            }
        })
    }

    async getCustomerById(id: number): Promise<CustomerModel | RpcException> {
        const customer = await this.db.client.customer.findUnique({
            where: {
                id: id
            },
            include: {
                cars: true
            }
        })

        if (!customer)
            return new CustomerNotFoundException(id)

        return customer
    }
    async saveNewCustomer(customerInfo: CustomerDto): Promise<CustomerModel | RpcException> {
        try {
            const customer = new CustomerEntity(customerInfo)
            return await this.db.client.customer.create({
                data: {
                    name: customer.name,
                    age: customer.age,
                    sex: customer.sex,
                },
            })
        } catch (error) {
            return new CustomerBadRequestException()
        }
    }
    async deleteCustomer(id: number): Promise<void | RpcException> {
        await this.db.client.customer.delete({
            where: {
                id: id
            }
        }).catch(() => {
            return new CustomerBadRequestException()
        })
    }
    async buyCar(payload: any): Promise<CustomerModel | RpcException> {        
        const customer = await this.db.client.customer.findUnique({
            where: {
                id: payload.data.customer
            },
            include: {
                cars: true
            }
        })

        if (!customer)
            return new CustomerNotFoundException(payload.data.customer)

        await this.db.client.customer.update({
            where: {
                id: payload.data.customer
            },
            data: {
                cars: {
                    create: {
                        id: payload.model.id,
                        brand: payload.model.brand,
                        model: payload.model.model,
                        horsePower: payload.model.horsePower,
                        torque: payload.model.torque,
                        type: payload.model.type,
                        createdAt: payload.model.createdAt,
                    }
                }
            }
        })

        const updatedCustomer = await this.db.client.customer.findUnique({
            where: {
                id: payload.data.customer
            },
            include: {
                cars: true
            }
        })
        return updatedCustomer
    }
}
