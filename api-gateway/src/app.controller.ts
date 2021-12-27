import { Controller, Get, Inject, OnApplicationBootstrap, Logger, Param, Post, Body, Query } from '@nestjs/common';
import CarDto from ".../../../common/dto/car.dto";
import { AppService } from './app.service';

@Controller('/api/')
export class AppController {
    constructor(private readonly service: AppService) {}

    @Get('cars')
    getAllCars() {
        return this.service.getAllCars()
    }

    @Get('cars/:id')
    getCar(@Param('id') id: string) {
        return this.service.getCar(id)
    }

    @Post('cars')
    saveCar(@Body() carData: CarDto) {
        return this.saveCar(carData)
    }

    @Post('cars/delete')
    deleteCar(@Query('id') id: string) {
        return this.service.deleteCar(id)
    }
}
