import { AppService } from './customer.service';
import { Customer as CustomerModel } from "@prisma/client"
import { Body, Controller, Get, HttpException, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import CustomerDto from '../../../common/dto/customer.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
    constructor(private readonly customerService: AppService) { }

    @Get()
    async getAll(): Promise<CustomerModel[]> {
        try {
            return await this.customerService.getAll()   
        } catch (error) {
            throw new HttpException('Error occured', error);
        }
    }

    @Get(':id')
    async getCustomerById(@Param('id') id: string): Promise<CustomerModel> {
        try {
            return this.customerService.getCustomerById(parseInt(id, 10))
        } catch (error) {
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }
    }

    @Post()
    async saveNewCustomer(@Body() customerInfo: CustomerDto): Promise<CustomerModel> {
        try {
            return this.customerService.saveNewCustomer(customerInfo)
        } catch (error) {
            throw new HttpException(`Customer wasn't created`, HttpStatus.BAD_REQUEST);
        }
    }

    @Post("/delete")
    async deleteCustomer(@Query('id') id: string): Promise<void> {
        try {
            console.log(typeof id, id);
            return this.customerService.deleteCustomer(parseInt(id, 10))
        } catch (error) {
            throw new HttpException(`Customer wasn't removed`, HttpStatus.BAD_REQUEST);
        }
    }

    @Patch("/purchase")
    @MessagePattern({ cmd: 'buy car' })
    async buyCar(@Query('id') id: string): Promise<CustomerModel> {
        try {
            return this.customerService.buyCar(parseInt(id, 10))
        } catch (error) {
            throw new HttpException(`Car wasn't purchased`, HttpStatus.BAD_REQUEST);
        }
    }
}
