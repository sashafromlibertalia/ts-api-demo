import Car from "../entities/car.entity";
import CarModel from "../models/car.model";

export interface ICarService {
    getAll(): Promise<Car[]>;
    getCarById(id: string): Promise<Car>;
    saveNewCar(carInfo: CarModel): Promise<Car>;
    deleteCar(id: number): Promise<void>;
}