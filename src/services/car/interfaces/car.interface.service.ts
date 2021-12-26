import CarDto from "../dto/car.dto";
import { Car as CarModel } from '@prisma/client'

export interface ICarService {
    getAll(): Promise<CarModel[]>;
    getCarById(id: string): Promise<CarModel>;
    saveNewCar(carInfo: CarDto): Promise<CarModel>;
    deleteCar(id: number): Promise<void>;
}