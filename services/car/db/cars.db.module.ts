import { PrismaClient } from '.prisma/client/index.js'

class CarsDbService {
    readonly client: any
   
    constructor() { 
        this.client = new PrismaClient()
    }
}


export default CarsDbService