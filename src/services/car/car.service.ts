import { Car } from "./entities/car.entity";
import { ICarService } from "./interfaces/car.interface.service";


export class CarService implements ICarService {
    getAll(): Car[] {
        throw new Error("Method not implemented.");
    }
    getCarById(id: string): Car {
        throw new Error("Method not implemented.");
    }
    saveNewCar(): Car {
        throw new Error("Method not implemented.");
    }

}