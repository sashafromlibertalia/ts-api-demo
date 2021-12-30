import { Injectable } from '@nestjs/common';
import CarsDbService from '../db/cars.db.module';
import { ICarService } from './interfaces/car.service.interface';
import { Car as CarModel } from '@prisma/client'
import CarDto from '../../../common/dto/car.dto';
import CarEntity from './entities/car.entity';
import CarNotFoundException from '../exceptions/car.not.found.exception';
import { RpcException } from '@nestjs/microservices';
import CarBadRequestException from '../exceptions/car.bad.request.exception';

@Injectable()
export class AppService implements ICarService {
    private readonly db: CarsDbService
    constructor() {
        this.db = new CarsDbService()
    }

    async getAll(): Promise<CarModel[]> {
        return await this.db.client.car.findMany()
    }

    async getCarById(id: number): Promise<CarModel | RpcException> {
        const car = await this.db.client.car.findUnique({
            where: {
                id: id
            }
        })

        if (!car)
            return new CarNotFoundException(id)

        return car
    }

    async saveNewCar(carInfo: CarDto): Promise<CarModel | RpcException> {
        try {
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
        } catch (error) {
            return new CarBadRequestException()
        }
    }

    async deleteCar(id: number): Promise<void | RpcException> {
        await this.db.client.car.delete({
            where: {
                id: id
            }
        }).catch(() => {
            return new CarBadRequestException()
        })
    }
}
