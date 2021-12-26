import { Controller, Logger } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './car.service';
import { Car as CarModel } from '@prisma/client'
import CarDto from '../../../common/dto/car.dto';

@Controller('api/cars')
export class AppController {
    constructor(private readonly carService: AppService) { }

    @MessagePattern({ cmd: 'get-all-cars' })
    async getAllCars(): Promise<CarModel[]> {
        return await this.carService.getAll()
    }

    @MessagePattern({ cmd: 'get-single-car' })
    async getCar(@Payload() data: number): Promise<CarModel> {
        return await this.carService.getCarById(data)
    }

    @MessagePattern({ cmd: 'create-car' })
    async createCar(@Payload() data: CarDto): Promise<CarModel> {
        return await this.carService.saveNewCar(data)
    }

    @MessagePattern({ cmd: 'delete-car' })
    async deleteCar(@Payload() data: number): Promise<void> {
        return await this.carService.deleteCar(data)
    }
}
