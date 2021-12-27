import { Controller, Logger } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './car.service';
import { Car as CarModel } from '@prisma/client'
import CarDto from '../../../common/dto/car.dto';
import { CarCmd } from '../../../common/services.cmd';

@Controller()
export class AppController {
    constructor(private readonly carService: AppService) { }

    @MessagePattern({ cmd: CarCmd.GetAll })
    async getAllCars(): Promise<CarModel[]> {
        return await this.carService.getAll()
    }

    @MessagePattern({ cmd: CarCmd.GetSingleCar })
    async getCar(@Payload() data: number): Promise<CarModel> {
        return await this.carService.getCarById(data)
    }

    @MessagePattern({ cmd: CarCmd.CreateCar })
    async createCar(@Payload() data: CarDto): Promise<CarModel> {
        return await this.carService.saveNewCar(data)
    }

    @MessagePattern({ cmd: CarCmd.DeleteCar })
    async deleteCar(@Payload() data: number): Promise<void> {
        return await this.carService.deleteCar(data)
    }
}
