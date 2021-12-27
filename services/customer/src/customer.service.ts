import { Inject, Injectable } from '@nestjs/common';
import ServiceTypes from '../../../common/microservice.types';
import { Customer as CustomerModel } from "@prisma/client"
import CustomersDbService from '../db/customers.db.module';
import { ClientProxy } from '@nestjs/microservices';
import CustomerDto from '../../../common/dto/customer.dto';
import CustomerEntity from './entities/customer.entity';
import { ICustomerService } from './interfaces/customer.service.interface';

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

    async getCustomerById(id: number): Promise<CustomerModel> {
        return await this.db.client.customer.findUnique({
            where: {
                id: id
            },
            include: {
                cars: true
            }
        })
    }
    async saveNewCustomer(customerInfo: CustomerDto): Promise<CustomerModel> {
        const customer = new CustomerEntity(customerInfo)
        return await this.db.client.customer.create({
            data: {
                name: customer.name,
                age: customer.age,
                sex: customer.sex,
            },
        })
    }
    async deleteCustomer(id: number): Promise<void> {
        await this.db.client.customer.delete({
            where: {
                id: id
            }
        })
    }
    async buyCar(id: number): Promise<CustomerModel> {
        throw new Error("Method not implemented.");
    }
}
