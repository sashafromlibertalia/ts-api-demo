import { PrismaClient } from '@prisma/client'

class CarDbService {
    readonly client: any
   
    constructor() { 
        this.client = new PrismaClient()
    }
}


export default CarDbService