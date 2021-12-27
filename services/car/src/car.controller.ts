import { Controller, HttpException, HttpStatus, Logger } from '@nestjs/common';
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
        try {
            return await this.carService.getAll()
        } catch (error) {
            throw new HttpException('Error occured', error);
        }
    }

    @MessagePattern({ cmd: CarCmd.GetSingleCar })
    async getCar(@Payload() data: number): Promise<CarModel> {
        try {
            return await this.carService.getCarById(data)
        } catch (error) {
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }
    }

    @MessagePattern({ cmd: CarCmd.CreateCar })
    async createCar(@Payload() data: CarDto): Promise<CarModel> {
        try {
            return await this.carService.saveNewCar(data)
        } catch (error) {
            throw new HttpException(`Car wasn't created`, HttpStatus.BAD_REQUEST);
        }
    }

    @MessagePattern({ cmd: CarCmd.DeleteCar })
    async deleteCar(@Payload() data: number): Promise<void> {
        try {
            return await this.carService.deleteCar(data)
        } catch (error) {
            throw new HttpException(`Car wasn't removed`, HttpStatus.BAD_REQUEST);
        }
    }
}
