import { HttpStatus } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

class CustomerBadRequestException extends RpcException {
    constructor() {
        super({
            status: HttpStatus.BAD_REQUEST,
            message: `Bad request provided`
        })
    }
}

export default CustomerBadRequestException;