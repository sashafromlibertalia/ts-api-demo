import { Inject, Injectable } from '@nestjs/common';
import ServiceTypes from '../../../common/microservice.types';
import { Customer as CustomerModel } from "@prisma/client"
import CustomersDbService from '../db/customers.db.module';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import CustomerDto from '../../../common/dto/customer.dto';
import CustomerEntity from './entities/customer.entity';
import { ICustomerService } from './interfaces/customer.service.interface';
import CustomerNotFoundException from '../exceptions/customer.notFound.exception';
import CustomerBadRequestException from '../exceptions/customer.badRequest.exception';

@Injectable()
export class AppService implements ICustomerService {
    private readonly db: CustomersDbService
    constructor() {
        this.db = new CustomersDbService()
    }

    async getAll(): Promise<CustomerModel[]> {
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
        const deletedCustomer = await this.db.client.customer.delete({
            where: {
                id: id
            }
        })

        if (!deletedCustomer.affected)
            return new CustomerBadRequestException()
    }
    async buyCar(id: number): Promise<CustomerModel | RpcException> {
        throw new Error("Method not implemented.");
    }
}
