import CarTypes from "../src/common/enums/car.types";
import CarModel from "../src/services/car/models/car.model";
import Car from "../src/services/car/entities/car.entity";

test('Create car entity => entity created', () => {
    const carData: CarModel = {
        brand: 'BMW',
        model: 'M5',
        horsePower: 650,
        torque: 700,
        type: CarTypes.SEDAN
    };

    expect(() => {
        new Car(carData);
    }).not.toThrowError()
});

test('Create car entity with poor power => catch error', () => {
    const carData: CarModel = {
        brand: 'BMW',
        model: 'M5',
        horsePower: 10,
        torque: 700,
        type: CarTypes.SEDAN
    };

    expect(() => {
        new Car(carData);
    }).toThrowError()
});