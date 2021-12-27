import { Controller, Get, Param, Post, Body, Query, NotFoundException, BadGatewayException, BadRequestException } from '@nestjs/common';
import CarDto from ".../../../common/dto/car.dto";
import { AppService } from './app.service';
import CustomerDto from '../../common/dto/customer.dto';

@Controller('/api/')
export class AppController {
    constructor(private readonly service: AppService) { }

    @Get('cars')
    async getAllCars() {
        try {
            return this.service.getAllCars()
        } catch (error) {
            throw new BadGatewayException('Error occured')
        }
    }

    @Get('cars/:id')
    async getCar(@Param('id') id: string) {
        try {
            return this.service.getCar(id)
        } catch (error) {
            throw new NotFoundException(`Car wasn't found`)
        }
    }

    @Post('cars')
    async saveCar(@Body() carData: CarDto) {
        try {
            return this.saveCar(carData)
        } catch (error) {
            throw new BadRequestException(`Can't create a car`)
        }
    }

    @Post('cars/delete')
    async deleteCar(@Query('id') id: string) {
        try {
            return this.service.deleteCar(id)
        } catch (error) {
            throw new BadRequestException(`Can't remove a car`)
        }
    }


    @Get('customers')
    async getAllCustomers() {
        try {
            return this.service.getAllCustomers()
        } catch (error) {
            throw new BadGatewayException('Error occured')
        }
    }

    @Get('customers/:id')
    getCustomer(@Param('id') id: string) {
        try {
            return this.service.getCustomer(id)
        } catch (error) {
            throw new NotFoundException(`Car wasn't found`)
        }
    }

    @Post('customers')
    saveCustomer(@Body() customerData: CustomerDto) {
        try {
            return this.service.saveCustomer(customerData)
        } catch (error) {
            throw new BadRequestException(`Can't creat a customer`)
        }
    }

    @Post('customers/delete')
    deleteCustomer(@Query('id') id: string) {
        try {
            return this.service.deleteCustomer(id)
        } catch (error) {
            throw new BadRequestException(`Can't remove a customer`)
        }
    }
}
