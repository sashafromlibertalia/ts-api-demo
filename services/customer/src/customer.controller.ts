import { AppService } from './customer.service';
import { Customer as CustomerModel } from "@prisma/client"
import { BadRequestException, Controller, HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import CustomerDto from '../../../common/dto/customer.dto';
import { MessagePattern, Payload, RpcException } from '@nestjs/microservices';
import { CustomerCmd } from '../../../common/services.cmd';

@Controller()
export class AppController {
    constructor(private readonly customerService: AppService) { }

    @MessagePattern({ cmd: CustomerCmd.GetAll })
    async getAll(): Promise<CustomerModel[]> {
        return await this.customerService.getAll()   
    }

    @MessagePattern({ cmd: CustomerCmd.GetSingleCustomer })
    async getCustomerById(@Payload() id: string): Promise<CustomerModel | RpcException> {
        return await this.customerService.getCustomerById(parseInt(id, 10))
    }

    @MessagePattern({ cmd: CustomerCmd.CreateCustomer })
    async saveNewCustomer(@Payload() customerInfo: CustomerDto): Promise<CustomerModel | RpcException> {
        return await this.customerService.saveNewCustomer(customerInfo)
    }

    @MessagePattern({ cmd: CustomerCmd.Delete })
    async deleteCustomer(@Payload() id: string): Promise<void | RpcException> {
        return await this.customerService.deleteCustomer(parseInt(id, 10))
    }

    @MessagePattern({ cmd: CustomerCmd.PurchaseCar })
    async buyCar(@Payload() id: string): Promise<CustomerModel | RpcException> {
        return await this.customerService.buyCar(parseInt(id, 10))
    }
}
