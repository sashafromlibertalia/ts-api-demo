import { HttpStatus } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

class CarBadRequestException extends RpcException {
    constructor() {
        super({
            status: HttpStatus.BAD_REQUEST,
            message: `Bad`
        })
    }
}

export default CarBadRequestException;