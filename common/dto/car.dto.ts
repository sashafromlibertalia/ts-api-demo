import CarTypes from "../enums/car.types";

type CarDto = {
    brand: string
    model: string
    horsePower: number
    torque: number,
    type: CarTypes
}

export default CarDto