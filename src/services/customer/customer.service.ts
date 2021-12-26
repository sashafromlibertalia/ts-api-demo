import { ICustomerService } from "./interfaces/customer.interface.service"
import { Inject, Injectable } from '@nestjs/common';
import DbService from "../../../db/db.module";
import { ClientProxy } from '@nestjs/microservices';
import { MSTypes } from "../../common/microservice.types";
import { Customer as CustomerModel } from "@prisma/client";
import CustomerDto from "./dto/customer.dto";
import CustomerEntity from "./entities/customer.entity";

@Injectable()
class CustomerService implements ICustomerService {
    private readonly db: DbService
    constructor(@Inject(MSTypes.CUSTOMER) private readonly client: ClientProxy) {
        this.db = new DbService()
    }
    
    async getAll(): Promise<CustomerModel[]> {
        return await this.db.client.customer.findMany({
            include: {
                cars: true,
            },
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

export default CustomerService