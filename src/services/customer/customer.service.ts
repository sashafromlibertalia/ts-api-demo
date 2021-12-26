import { ICustomerService } from "./interfaces/customer.interface.service"
import { Inject, Injectable } from '@nestjs/common';
import DbService from "../../../db/db.module";
import { ClientProxy } from '@nestjs/microservices';
import { MSTypes } from "../../common/microservice.types";
import { Customer } from "@prisma/client";
import CustomerDto from "./dto/customer.dto";

@Injectable()
class CustomerService implements ICustomerService {
    private readonly db: DbService
    constructor(@Inject(MSTypes.CUSTOMER) private readonly client: ClientProxy) {
        this.db = new DbService()
    }
    async getAll(): Promise<Customer[]> {
        return await this.db.client.findMany({
            include: {
                car: true,
            },
        })
    }
    
    async getCustomerById(id: string): Promise<Customer> {
        throw new Error("Method not implemented.");
    }
    async saveNewCustomer(carInfo: CustomerDto): Promise<Customer> {
        throw new Error("Method not implemented.");
    }
    async deleteCustomer(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async buyCar(id: string): Promise<Customer> {
        throw new Error("Method not implemented.");
    }
}

export default CustomerService