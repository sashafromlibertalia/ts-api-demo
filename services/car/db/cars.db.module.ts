import { PrismaClient } from '@prisma/client'

class CarsDbService {
    readonly client: PrismaClient<any>
   
    constructor() { 
        this.client = new PrismaClient()
    }
}


export default CarsDbService