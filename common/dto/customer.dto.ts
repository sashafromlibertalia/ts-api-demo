import { CustomerSex } from "../enums/customer.sex";

type CustomerDto = {
    name: string
    age: number
    sex: CustomerSex
}

export default CustomerDto