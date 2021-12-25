import { IDatabaseService } from "../common/IDatabase.service";
import { PrismaClient } from '@prisma/client'

class DbService implements IDatabaseService {
    readonly client: any
    constructor() {
        this.client = new PrismaClient()
    }

    initializeDb(): void {}
}


export default DbService