import { PrismaClient } from '@prisma/client'

class CustomersDbService {
    readonly client: PrismaClient<any>
   
    constructor() { 
        this.client = new PrismaClient()
    }
}

export default CustomersDbService