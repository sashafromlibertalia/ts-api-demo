import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Query, Patch } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Customer as CustomerModel } from '@prisma/client'
import CustomerService from './customer.service';
import CustomerDto from './dto/customer.dto';

@Controller('api/customers')
export class CustomerController {
    constructor(private readonly customerService: CustomerService) { }

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
