import { CustomerSex } from '../../../common/enums/customer.sex'
import prisma from '../client'

interface CreateCustomer {
    id: number,
    name: string,
    age: number
    sex: CustomerSex,
    createdAt: Date,
}

export async function CreateCustomer(customer: CreateCustomer) {
    return await prisma.customer.create({
        data: customer,
    })
}

export async function DeleteCustomer(customer: CreateCustomer) {
    return await prisma.customer.delete({
        where: {
            id: customer.id
        }
    })
}