import { Controller, UseFilters } from '@nestjs/common';
import { MessagePattern, Payload, RpcException } from '@nestjs/microservices';
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
    async getCar(@Payload() id: number): Promise<CarModel | RpcException> {
        return await this.carService.getCarById(id)
    }

    @MessagePattern({ cmd: CarCmd.CreateCar })
    async createCar(@Payload() data: CarDto): Promise<CarModel | RpcException> {
        return await this.carService.saveNewCar(data)
    }

    @MessagePattern({ cmd: CarCmd.DeleteCar })
    async deleteCar(@Payload() data: number): Promise<void | RpcException> {
        return await this.carService.deleteCar(data)
    }
}
