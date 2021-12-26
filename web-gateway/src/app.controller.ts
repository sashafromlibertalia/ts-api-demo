import { Controller, Get, Inject, OnApplicationBootstrap, Logger, Param, Post, Body, Query } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import MSTypes from '../../common/microservice.types';
import { Observable } from 'rxjs';
import CarDto from ".../../../common/dto/car.dto";

@Controller('/api/')
export class AppController implements OnApplicationBootstrap {
    private logger = new Logger('AppControler');
    constructor(@Inject(MSTypes.CAR) private readonly client: ClientProxy) { 

    }

    async onApplicationBootstrap() {
        this.logger.log(`Connect to ${MSTypes.CAR}`);        
        await this.client.connect();
    }

    @Get('cars')
    getAllCars(): Observable<void> {
        return this.client.send<void>({ cmd: 'get-all-cars' }, '');
    }

    @Get('cars/:id')
    getCar(@Param('id') id: string): Observable<void> {
        return this.client.send<void>({ cmd: 'get-single-car' }, parseInt(id, 10));
    }

    @Post('cars')
    saveCar(@Body() carData: CarDto): Observable<CarDto> {
        this.logger.log(`Got ${carData.brand}`);        
        return this.client.send<CarDto>({ cmd: 'create-car' }, carData);
    }

    @Post('cars/delete')
    deleteCar(@Query('id') id: string): Observable<void> {
        return this.client.send<void>({ cmd: 'delete-car' }, parseInt(id, 10));
    }
}
