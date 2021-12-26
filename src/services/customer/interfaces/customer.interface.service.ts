import CustomerDto from '../dto/customer.dto'
import { Customer as CustomerModel } from '@prisma/client'

export interface ICustomerService {
    getAll(): Promise<CustomerModel[]>;
    getCustomerById(id: number): Promise<CustomerModel>;
    saveNewCustomer(customerInfo: CustomerDto): Promise<CustomerModel>;
    deleteCustomer(id: number): Promise<void>;
    buyCar(id: number): Promise<CustomerModel>
}