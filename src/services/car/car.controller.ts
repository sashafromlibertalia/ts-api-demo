import { Controller, Get, Param, Post } from '@nestjs/common';
import CarService from './car.service';
import Car from './entities/car.entity';

@Controller('api/cars')
export class CarController {
    constructor(private readonly carService: CarService) { }

    @Get()
    getAll(): Array<Car> {
        return this.carService.getAll()
    }

    @Get(':id')
    getCarById(@Param('id') id): Car {
        return this.carService.getCarById(id)
    }

    @Post()
    saveNewCar(): Car {
        return this.carService.saveNewCar()
    }
}
