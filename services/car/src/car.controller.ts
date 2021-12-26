import { Controller, Logger } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './car.service';
import { Car as CarModel } from '@prisma/client'

@Controller('api/cars')
export class AppController {
    constructor(private readonly carService: AppService) { }

    @MessagePattern({ cmd: 'get-all-cars' })
    async getAllCars(): Promise<CarModel[]> {
        return await this.carService.getAll()
    }
}
