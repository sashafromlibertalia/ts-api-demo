import { CarTypes } from "../enums/car.types";

export type car = {
    brand: string
    model: string
    horsePower: number
    torque: number,
    type: CarTypes
}