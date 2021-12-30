import CarDto from "../../../common/dto/car.dto";
import CarTypes from "../../../common/enums/car.types";
import CarEntity from "../src/entities/car.entity";

let carData: CarDto = {
    brand: 'BMW',
    model: 'M5',
    horsePower: 650,
    torque: 700,
    type: CarTypes.SEDAN
};


test('Create car entity => entity created', () => {
    expect(() => {
        new CarEntity(carData);
    }).not.toThrowError()
});

test('Create car entity with poor power => catch error', () => {
    carData.horsePower = 10
    expect(() => {
        new CarEntity(carData);
    }).toThrowError()
});