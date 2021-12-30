import { Controller, Get, Param, Post, Body, Query, Inject } from '@nestjs/common';
import CarDto from ".../../../common/dto/car.dto";
import { AppService } from './app.service';
import CustomerDto from '../../common/dto/customer.dto';
import PurchaseDto from '../../common/dto/purchase.dto';

@Controller('/api/')
export class AppController {
    constructor(private readonly service: AppService) { }

    @Get('cars')
    async getAllCars() {
        return this.service.getAllCars()
    }

    @Get('cars/:id')
    async getCar(@Param('id') id: string) {
        return this.service.getCar(id)
    }

    @Post('cars')
    async saveCar(@Body() carData: CarDto) {
        return this.service.saveCar(carData)
    }

    @Post('cars/delete')
    async deleteCar(@Query('id') id: string) {
        return this.service.deleteCar(id)
    }


    @Get('customers')
    async getAllCustomers() {
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

    @Post('customers/purchase')
    purchaseCar(@Body() purchase: PurchaseDto) {
        return this.service.purchaseCar(purchase)
    }
}
