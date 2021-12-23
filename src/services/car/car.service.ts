import { MSTypes } from "src/common/microservices";
import Car from "./entities/car.entity";
import { Inject, Injectable } from '@nestjs/common';
import { ICarService } from "./interfaces/car.interface.service";
import { ClientProxy } from '@nestjs/microservices';
import lowdb from "lowdb";
import { default as FileSync } from "lowdb/adapters/FileSync";
import CarsDatabase from "./interfaces/cars.db";

@Injectable()
class CarService implements ICarService {
    private db: lowdb.LowdbSync<CarsDatabase>;
    constructor(@Inject(MSTypes.CAR) private readonly client: ClientProxy) {
        this.db = lowdb(new FileSync<CarsDatabase>("carsDb.json"))
    }

    getAll(): Car[] {
        console.log(this.db)
        throw new Error("Method not implemented.");
    }

    getCarById(id: string): Car {
        throw new Error("Method not implemented.");
    }
    
    saveNewCar(): Car {
        throw new Error("Method not implemented.");
    }

}

export default CarService