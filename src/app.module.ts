import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MSTypes } from './common/microservices';
import { CarController } from './services/car/car.controller';
import { CarService } from './services/car/car.service';

@Module({
    imports: [
        ClientsModule.register([{ name: MSTypes.CAR, transport: Transport.TCP }])
    ],
    controllers: [CarController],
    providers: [CarService],
})

export class AppModule { }