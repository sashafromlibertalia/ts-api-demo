import { CustomerSex } from "../../../common/enums/customer.sex";
import CustomerDto from "../dto/customer.dto";

export class Customer {
    private readonly MINIMAL_AGE: number = 18;

    readonly name: string
    readonly age: number
    readonly sex: CustomerSex

    constructor(customerModel: CustomerDto) {
        if (customerModel.age < this.MINIMAL_AGE)
            throw new Error("Customer too young.")

        if (!!!customerModel.name)
            throw new Error("Customer's name not found.")

        this.name = customerModel.name
        this.age = customerModel.age
        this.sex = customerModel.sex
    }
}