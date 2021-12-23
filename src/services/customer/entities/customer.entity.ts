import { v4 as uuid } from 'uuid';
import { CustomerSex } from "../../../common/enums/customer.sex";
import { customer } from "../models/customer.model";

export class Customer {
    private readonly MINIMAL_AGE: number = 18;

    readonly ID: string
    readonly name: string
    readonly age: number
    readonly sex: CustomerSex

    constructor(customerModel: customer) {
        if (customerModel.age < this.MINIMAL_AGE)
            throw new Error("Customer too young.")

        if (!!!customerModel.name)
            throw new Error("Customer's name not found.")

        this.ID = uuid()
        this.name = customerModel.name
        this.age = customerModel.age
        this.sex = customerModel.sex
    }
}