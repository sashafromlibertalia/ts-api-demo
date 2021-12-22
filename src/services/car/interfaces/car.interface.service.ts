import { Car } from "../entities/car.entity";

export interface ICarService {
    getAll(): Array<Car>;
    getCarById(id: string): Car;
    saveNewCar(): Car;
}