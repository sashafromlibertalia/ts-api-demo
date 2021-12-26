import { MSTypes } from "src/common/microservice.types";
import { Inject, Injectable } from '@nestjs/common';
import { ICarService } from "./interfaces/car.interface.service";
import { ClientProxy } from '@nestjs/microservices';
import CarEntity from "./entities/car.entity";
import { Car as CarModel } from '@prisma/client'
import CarDto from "./dto/car.dto";
import DbService from "../../../db/db.module";

@Injectable()
class CarService implements ICarService {
    private readonly db: DbService
    constructor(@Inject(MSTypes.CAR) private readonly client: ClientProxy) {
        this.db = new DbService()
    }

    async getAll(): Promise<CarModel[]> {
        return await this.db.client.car.findMany()
    }

    async getCarById(id: string): Promise<CarModel> {
        return await this.db.client.car.findUnique({
            where: {
                id: parseInt(id, 10)
            }
        })
    }
    
    async saveNewCar(carInfo: CarDto): Promise<CarModel> {
        const car = new CarEntity(carInfo)
        return await this.db.client.car.create({
            data: {
                brand: car.brand,
                model: car.model,
                horsePower: car.horsePower,
                torque: car.torque,
                type: car.type,
                createdAt: new Date().toISOString()
            }
        })
    }

    async deleteCar(id: number): Promise<void> {
        await this.db.client.car.delete({
            where: {
                id: id
            }
        })
    }
}

export default CarService