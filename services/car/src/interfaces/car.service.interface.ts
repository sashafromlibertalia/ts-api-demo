import CarDto from "../../../../common/dto/car.dto";
import { Car as CarModel } from '@prisma/client'

export interface ICarService {
    getAll(): Promise<CarModel[]>;
    getCarById(id: number): Promise<CarModel>;
    saveNewCar(carInfo: CarDto): Promise<CarModel>;
    deleteCar(id: number): Promise<void>;
}