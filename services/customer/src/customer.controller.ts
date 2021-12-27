import { AppService } from './customer.service';
import { Customer as CustomerModel } from "@prisma/client"
import { Controller } from '@nestjs/common';
import CustomerDto from '../../../common/dto/customer.dto';
import { MessagePattern, Payload, RpcException } from '@nestjs/microservices';
import { CustomerCmd } from '../../../common/services.cmd';
import PurchaseDto from '../../../common/dto/purchase.dto';

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
    async buyCar(@Payload() payload: object): Promise<CustomerModel | RpcException> {
        return await this.customerService.buyCar(payload)
    }
}
