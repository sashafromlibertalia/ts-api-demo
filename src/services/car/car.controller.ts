import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import CarService from './car.service';
import Car from './entities/car.entity';
import CarModel from './models/car.model';

@Controller('api/cars')
export class CarController {
    constructor(private readonly carService: CarService) { }

    @Get()
    async getAll(): Promise<Car[]> {
        try {
            return await this.carService.getAll()   
        } catch (error) {
            throw new HttpException('Error occured', error);
        }
    }

    @Get(':id')
    async getCarById(@Param('id') id: string): Promise<Car> {
        try {
            return this.carService.getCarById(id)   
        } catch (error) {
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }
    }

    @Post()
    async saveNewCar(@Body() carInfo: CarModel): Promise<Car> {
        try {
            return this.carService.saveNewCar(carInfo)
        } catch (error) {
            throw new HttpException(`Car wasn't created`, HttpStatus.BAD_REQUEST);
        }
    }
}
