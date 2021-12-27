import { PrismaClient } from '@prisma/client'

class CustomersDbService {
    readonly client: any
   
    constructor() { 
        this.client = new PrismaClient()
    }
}

export default CustomersDbService