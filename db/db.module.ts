import { PrismaClient } from '@prisma/client'

class DbService {
    readonly client: any
   
    constructor() { 
        this.client = new PrismaClient()
    }
}


export default DbService