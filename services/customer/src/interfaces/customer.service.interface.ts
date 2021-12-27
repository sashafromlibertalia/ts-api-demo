import CustomerDto from "../../../../common/dto/customer.dto";
import { Customer as CustomerModel } from '@prisma/client'

export interface ICustomerService {
    getAll(): Promise<CustomerModel[]>;
    getCustomerById(id: number): Promise<CustomerModel>;
    saveNewCustomer(carInfo: CustomerDto): Promise<CustomerModel>;
    deleteCustomer(id: number): Promise<void>;
    buyCar(id: number): Promise<CustomerModel>;
}