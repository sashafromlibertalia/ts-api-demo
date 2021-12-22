import { car } from "../models/car.model"
import uuidv4 from "uuid";
import { CarTypes } from "../enums/car.types";

export class Car {
    private readonly MINIMAL_HORSE_POWER: number = 120;
    private readonly MINIMAL_TORQUE: number = 250;

    readonly ID: string
    readonly brand: string
    readonly model: string
    readonly horsePower: number
    readonly torque: number
    readonly type: CarTypes

    constructor(carModel: car) {
        if (carModel.horsePower < this.MINIMAL_HORSE_POWER)
            throw new Error("Engine power can't be that poor.")

        if (carModel.torque < this.MINIMAL_TORQUE)
            throw new Error("Torque can't be that poor.")

        if (!!!carModel.brand)
            throw new Error("Brand can't be empty.")

        if (!!!carModel.model)
            throw new Error("Car's model can't be empty.")

        this.ID = uuidv4.v4()
        this.brand = carModel.brand
        this.horsePower = carModel.horsePower
        this.model = carModel.model
        this.torque = carModel.torque
        this.type = carModel.type
    }
}