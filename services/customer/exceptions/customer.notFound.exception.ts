import { HttpStatus } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

class CustomerNotFoundException extends RpcException {
    constructor(id: number) {
        super({
            status: HttpStatus.NOT_FOUND,
            message: `Customer #${id} wan't found`
        })
    }
}

export default CustomerNotFoundException;