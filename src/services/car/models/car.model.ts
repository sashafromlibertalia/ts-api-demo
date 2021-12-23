import CarTypes from "../../../common/enums/car.types";

type CarModel = {
    brand: string
    model: string
    horsePower: number
    torque: number,
    type: CarTypes
}

export default CarModel