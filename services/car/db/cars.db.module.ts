import { PrismaClient } from '@prisma/client'

class CarsDbService {
    readonly client: any
   
    constructor() { 
        this.client = new PrismaClient()
    }
}


export default CarsDbService