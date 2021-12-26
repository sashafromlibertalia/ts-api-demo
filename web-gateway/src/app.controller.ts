import { Controller, Get, Inject, OnApplicationBootstrap, Logger } from '@nestjs/common';
import { ClientProxy,  Payload } from '@nestjs/microservices';
import MSTypes from '../../common/microservice.types';
import { Observable } from 'rxjs';

@Controller()
export class AppController implements OnApplicationBootstrap {
    private logger = new Logger('AppControler');
    constructor(@Inject(MSTypes.CAR) private readonly client: ClientProxy) { 

    }

    async onApplicationBootstrap() {
        this.logger.log(`Connect to ${MSTypes.CAR}`);        
        await this.client.connect();
    }

    @Get('/api/cars')
    getAllCars(): Observable<void> {
        return this.client.send<void>({ cmd: 'get-all-cars' }, null);
    }
}
