import { Car } from "@prisma/client";
import { AppController } from "./car.controller";
import { AppService } from "./car.service";
import CarDbService from '../db/cars.db.module';

describe('CarController', () => {
    let carController: AppController;
    let carService: AppService;
    let db: CarDbService;

    beforeEach(() => {
        carService = new AppService();
        carController = new AppController(carService);
        db = new CarDbService()
        db.client.$connect()
    });

    describe('getAllCars', () => {
        it('should return an empty array of cars', async () => {
            const result: Car[] = [];
            jest.spyOn(carController, 'getAllCars').mockImplementation(async () => result);

            carController.getAllCars().then((data) => {
                expect(data).toBe(result);
            })
        });
    });

    describe('getCar', () => {
        it('should return a single car', async () => {
            const result: Car[] = [];
            jest.spyOn(carController, 'getAllCars').mockImplementation(async () => result);

            carController.getAllCars().then((data) => {
                expect(data).toBe(result);
            })
        });
    });
})