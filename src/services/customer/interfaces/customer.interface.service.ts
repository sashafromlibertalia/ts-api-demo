import CustomerDto from '../dto/customer.dto'
import { Customer as CustomerModel } from '@prisma/client'

export interface ICustomerService {
    getAll(): Promise<CustomerModel[]>;
    getCustomerById(id: string): Promise<CustomerModel>;
    saveNewCustomer(carInfo: CustomerDto): Promise<CustomerModel>;
    deleteCustomer(id: number): Promise<void>;
    buyCar(id: string): Promise<CustomerModel>
}