import CarDto from "../../../../common/dto/car.dto";
import { Car as CarModel } from '@prisma/client'
import { RpcException } from "@nestjs/microservices";

export interface ICarService {
    getAll(): Promise<CarModel[]>;
    getCarById(id: number): Promise<CarModel | RpcException>;
    saveNewCar(carInfo: CarDto): Promise<CarModel | RpcException>;
    deleteCar(id: number): Promise<void | RpcException>;
}