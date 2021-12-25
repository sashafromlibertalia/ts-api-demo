import { MSTypes } from "src/common/microservice.types";
import Car from "./entities/car.entity";
import { Inject, Injectable } from '@nestjs/common';
import { ICarService } from "./interfaces/car.interface.service";
import { ClientProxy } from '@nestjs/microservices';
import DbService from "../../db/db.service";
import CarModel from "./models/car.model";

@Injectable()
class CarService implements ICarService {
    private readonly db: DbService
    constructor(@Inject(MSTypes.CAR) private readonly client: ClientProxy) {
        this.db = new DbService()
    }

    async getAll(): Promise<Car[]> {
        return await this.db.client.car.findMany()
    }

    async getCarById(id: string): Promise<Car> {
        return await this.db.client.car.findUnique({
            where: {
                id: parseInt(id, 10)
            }
        })
    }
    
    async saveNewCar(carInfo: CarModel): Promise<Car> {
        return await this.db.client.car.create({
            data: {
                brand: carInfo.brand,
                model: carInfo.model,
                horsePower: carInfo.horsePower,
                torque: carInfo.torque,
                type: carInfo.type,
                createdAt: new Date().toISOString()
            }
        })
    }

}

export default CarService