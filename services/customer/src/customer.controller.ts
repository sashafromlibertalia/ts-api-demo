import { AppService } from './customer.service';
import { Customer as CustomerModel } from "@prisma/client"
import { Controller, HttpException, HttpStatus } from '@nestjs/common';
import CustomerDto from '../../../common/dto/customer.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CustomerCmd } from '../../../common/services.cmd';

@Controller()
export class AppController {
    constructor(private readonly customerService: AppService) { }

    @MessagePattern({ cmd: CustomerCmd.GetAll })
    async getAll(): Promise<CustomerModel[]> {
        try {
            return await this.customerService.getAll()   
        } catch (error) {
            throw new HttpException('Error occured', error);
        }
    }

    @MessagePattern({ cmd: CustomerCmd.GetSingleCustomer })
    async getCustomerById(@Payload() id: string): Promise<CustomerModel> {
        try {
            return this.customerService.getCustomerById(parseInt(id, 10))
        } catch (error) {
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }
    }

    @MessagePattern({ cmd: CustomerCmd.CreateCustomer })
    async saveNewCustomer(@Payload() customerInfo: CustomerDto): Promise<CustomerModel> {
        try {
            return this.customerService.saveNewCustomer(customerInfo)
        } catch (error) {
            throw new HttpException(`Customer wasn't created`, HttpStatus.BAD_REQUEST);
        }
    }

    @MessagePattern({ cmd: CustomerCmd.Delete })
    async deleteCustomer(@Payload() id: string): Promise<void> {
        try {
            return this.customerService.deleteCustomer(parseInt(id, 10))
        } catch (error) {
            throw new HttpException(`Customer wasn't removed`, HttpStatus.BAD_REQUEST);
        }
    }

    @MessagePattern({ cmd: CustomerCmd.PurchaseCar })
    async buyCar(@Payload() id: string): Promise<CustomerModel> {
        try {
            return this.customerService.buyCar(parseInt(id, 10))
        } catch (error) {
            throw new HttpException(`Car wasn't purchased`, HttpStatus.BAD_REQUEST);
        }
    }
}
