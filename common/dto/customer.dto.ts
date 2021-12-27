import { CustomerSex } from "../enums/customer.sex";

type CustomerDto = {
    name: string
    age: number
    sex: CustomerSex
    money: number
}

export default CustomerDto