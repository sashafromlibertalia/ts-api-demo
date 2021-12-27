import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import CarDto from '../../common/dto/car.dto';
import ServiceTypes from '../../common/microservice.types';
import { CarCmd } from '../../common/services.cmd';

@Injectable()
export class AppService {
    constructor(@Inject(ServiceTypes.CAR) private readonly clientCarService: ClientProxy,
                @Inject(ServiceTypes.CUSTOMER) private readonly clientCustomerService: ClientProxy) {}

    getAllCars(): Observable<void> {
        return this.clientCarService.send({ cmd: CarCmd.GetAll }, '');
    }

    getCar(id: string) {
        return this.clientCarService.send({ cmd: CarCmd.GetSingleCar }, parseInt(id, 10));
    }

    saveCar(carData: CarDto) {
        return this.clientCarService.send({ cmd: CarCmd.CreateCar }, carData);
    }

    deleteCar(id: string) {
        return this.clientCarService.send({ cmd: CarCmd.DeleteCar }, parseInt(id, 10));
    }
}
