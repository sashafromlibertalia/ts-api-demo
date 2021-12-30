import CustomerDto from "../../../../common/dto/customer.dto";
import { Customer as CustomerModel } from '@prisma/client'
import { RpcException } from "@nestjs/microservices";

export interface ICustomerService {
    getAllCustomers(): Promise<CustomerModel[]>;
    getCustomerById(id: number): Promise<CustomerModel | RpcException>;
    saveNewCustomer(carInfo: CustomerDto): Promise<CustomerModel | RpcException>;
    deleteCustomer(id: number): Promise<void | RpcException>;
    buyCar(payload: any): Promise<CustomerModel | RpcException>;
}