import { Controller, Get, Param, Post, Body, Query } from '@nestjs/common';
import CarDto from ".../../../common/dto/car.dto";
import { AppService } from './app.service';
import CustomerDto from '../../common/dto/customer.dto';

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

    
    @Get('customers')
    getAllCustomers() {
        return this.service.getAllCustomers()
    }

    @Get('customers/:id')
    getCustomer(@Param('id') id: string) {
        return this.service.getCustomer(id)
    }

    @Post('customers')
    saveCustomer(@Body() customerData: CustomerDto) {
        return this.service.saveCustomer(customerData)
    }

    @Post('customers/delete')
    deleteCustomer(@Query('id') id: string) {
        return this.service.deleteCustomer(id)
    }
}
