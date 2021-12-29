import { AppController } from "./car.controller";
import { AppService } from "./car.service";
import { CreateCar, DeleteCar, GetAllCars } from "../test/functions";
import CarTypes from "../../../common/enums/car.types";
import { prismaMock } from '../singleton';

describe('CarController', () => {
    let carController: AppController;
    let carService: AppService;

    beforeEach(() => {
        carService = new AppService();
        carController = new AppController(carService);
    });

    describe('getAllCars', () => {
        it('should return an empty array of cars', async () => {
            //@ts-ignore 
            prismaMock.car.findMany.mockResolvedValue([])
            await expect(GetAllCars()).resolves.toEqual([])
        });
    })

    describe('getCar', () => {
        it('should return a single car', async () => {
            const car = {
                id: 1,
                brand: "BMW",
                model: "M4",
                horsePower: 560,
                torque: 400,
                type: CarTypes.SEDAN,
                createdAt: new Date(),
            };

            prismaMock.car.create.mockResolvedValue(car)
            await expect(CreateCar(car)).resolves.toEqual(car)
        });
    });

    describe('deleteCar', () => {
        it('should delete a single car', async () => {
            const car = {
                id: 1,
                brand: "BMW",
                model: "M4",
                horsePower: 560,
                torque: 400,
                type: CarTypes.SEDAN,
                createdAt: new Date(),
            };

            prismaMock.car.delete.mockResolvedValue(car)
            await expect(DeleteCar(car)).resolves.toEqual(car)
        });
    });
})
