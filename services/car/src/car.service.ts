import { Injectable } from '@nestjs/common';
import CarsDbService from '../db/cars.db.module';
import { ICarService } from './interfaces/car.interface.service';
import { Car as CarModel } from '@prisma/client'
import CarDto from '../../../common/dto/car.dto';
import CarEntity from './entities/car.entity';

@Injectable()
export class AppService implements ICarService {
    private readonly db: CarsDbService
    constructor() {
        this.db = new CarsDbService()
    }

    async getAll(): Promise<CarModel[]> {
        return await this.db.client.car.findMany()
    }

    async getCarById(id: number): Promise<CarModel> {
        return await this.db.client.car.findUnique({
            where: {
                id: id
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
                createdAt: new Date().toISOString(),
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
