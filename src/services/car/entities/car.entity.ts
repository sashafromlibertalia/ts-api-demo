import CarModel from "../models/car.model"
import { v4 as uuid } from 'uuid';
import CarTypes from "../../../common/enums/car.types";

class Car {
    private readonly MINIMAL_HORSE_POWER: number = 120;
    private readonly MINIMAL_TORQUE: number = 250;

    readonly ID: string
    readonly brand: string
    readonly model: string
    readonly horsePower: number
    readonly torque: number
    readonly type: CarTypes

    constructor(carModel: CarModel) {
        if (carModel.horsePower < this.MINIMAL_HORSE_POWER)
            throw new Error("Engine power can't be that poor.")

        if (carModel.torque < this.MINIMAL_TORQUE)
            throw new Error("Torque can't be that poor.")

        if (!!!carModel.brand)
            throw new Error("Brand can't be empty.")

        if (!!!carModel.model)
            throw new Error("Car's model can't be empty.")

        if (!Object.values(CarTypes).includes(carModel.type))
            throw new Error("Invalid car type.")

        this.ID = uuid()
        this.brand = carModel.brand
        this.horsePower = carModel.horsePower
        this.model = carModel.model
        this.torque = carModel.torque
        this.type = carModel.type
    }
}

export default Car