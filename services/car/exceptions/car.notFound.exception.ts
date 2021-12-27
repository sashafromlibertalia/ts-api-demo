import { HttpStatus, NotFoundException } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

class CarNotFoundException extends RpcException {
    constructor(carId: number) {
        super({
            status: HttpStatus.NOT_FOUND,
            message: `Car #${carId} not found`
        })
    }
}

export default CarNotFoundException;