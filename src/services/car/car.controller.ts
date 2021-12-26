import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Query } from '@nestjs/common';
import CarService from './car.service';
import CarDto from './dto/car.dto';
import { Car as CarModel } from '@prisma/client'

@Controller('api/cars')
export class CarController {
    constructor(private readonly carService: CarService) { }

    @Get()
    async getAll(): Promise<CarModel[]> {
        try {
            return await this.carService.getAll()   
        } catch (error) {
            throw new HttpException('Error occured', error);
        }
    }

    @Get(':id')
    async getCarById(@Param('id') id: string): Promise<CarModel> {
        try {
            return this.carService.getCarById(id)   
        } catch (error) {
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }
    }

    @Post()
    async saveNewCar(@Body() carInfo: CarDto): Promise<CarModel> {
        try {
            return this.carService.saveNewCar(carInfo)
        } catch (error) {
            throw new HttpException(`Car wasn't created`, HttpStatus.BAD_REQUEST);
        }
    }

    @Post("/delete")
    async deleteCar(@Query('id') id: string): Promise<void> {
        try {
            return this.carService.deleteCar(parseInt(id, 10))
        } catch (error) {
            throw new HttpException(`Car wasn't removed`, HttpStatus.BAD_REQUEST);
        }
    }
}
