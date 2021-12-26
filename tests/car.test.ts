import CarTypes from "../src/common/enums/car.types";
import CarDto from "../src/services/car/dto/car.dto";
import Car from "../src/services/car/entities/car.entity";

let carData: CarDto = {
    brand: 'BMW',
    model: 'M5',
    horsePower: 650,
    torque: 700,
    type: CarTypes.SEDAN
};


test('Create car entity => entity created', () => {
    expect(() => {
        new Car(carData);
    }).not.toThrowError()
});

test('Create car entity with poor power => catch error', () => {
    carData.horsePower = 10
    expect(() => {
        new Car(carData);
    }).toThrowError()
});