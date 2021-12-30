import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom, Observable } from 'rxjs';
import CarDto from '../../common/dto/car.dto';
import CustomerDto from '../../common/dto/customer.dto';
import PurchaseDto from '../../common/dto/purchase.dto';
import ServiceTypes from '../../common/microservice.types';
import { CarCmd, CustomerCmd } from '../../common/services.cmd';
import IAppService from './interfaces/app.service.interface';

@Injectable()
export class AppService implements IAppService {
    constructor(@Inject(ServiceTypes.CAR) private readonly clientCarService: ClientProxy,
        @Inject(ServiceTypes.CUSTOMER) private readonly clientCustomerService: ClientProxy) { }

    getAllCars(): Observable<object[]> {
        return this.clientCarService.send({ cmd: CarCmd.GetAll }, '');
    }

    getCar(id: string): Observable<object> {
        return this.clientCarService.send({ cmd: CarCmd.GetSingleCar }, parseInt(id, 10));
    }

    saveCar(carData: CarDto): Observable<object> {
        return this.clientCarService.send({ cmd: CarCmd.CreateCar }, carData);
    }

    deleteCar(id: string): Observable<void> {
        return this.clientCarService.send({ cmd: CarCmd.DeleteCar }, parseInt(id, 10));
    }

    getAllCustomers(): Observable<object[]> {
        return this.clientCustomerService.send({ cmd: CustomerCmd.GetAll }, '');
    }

    getCustomer(id: string): Observable<object> {
        return this.clientCustomerService.send({ cmd: CustomerCmd.GetSingleCustomer }, parseInt(id, 10));
    }

    saveCustomer(customerData: CustomerDto): Observable<object> {
        return this.clientCustomerService.send({ cmd: CustomerCmd.CreateCustomer }, customerData);
    }

    deleteCustomer(id: string): Observable<void> {
        return this.clientCustomerService.send({ cmd: CustomerCmd.GetSingleCustomer }, parseInt(id, 10));
    }

    async purchaseCar(purchase: PurchaseDto): Promise<Observable<void>> {
        const car = async () => {
            const fetched = await lastValueFrom(this.clientCarService.send({ cmd: CarCmd.GetSingleCar }, purchase.car));
            return fetched;
        }

        return this.clientCustomerService.send({ cmd: CustomerCmd.PurchaseCar }, { data: purchase, model: await car() });
    }
}
