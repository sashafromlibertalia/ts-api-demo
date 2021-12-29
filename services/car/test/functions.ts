import CarTypes from '../../../common/enums/car.types'
import prisma from '../client'

interface CreateCar {
    id: number,
    brand: string,
    model: string,
    horsePower: number,
    torque: number
    type: CarTypes
    createdAt: Date
}

export async function GetAllCars() {
    return await prisma.car.findMany()
}

export async function CreateCar(car: CreateCar) {
    return await prisma.car.create({
        data: car,
    })
}

export async function DeleteCar(car: CreateCar) {
    return await prisma.car.delete({
        where: {
            id: car.id
        }
    })
}