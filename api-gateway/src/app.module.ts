import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import ServiceTypes from '../../common/microservice.types';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: ServiceTypes.CAR,
                transport: Transport.TCP,
                options: {
                    port: 4222
                },
            }, {
                name: ServiceTypes.CUSTOMER,
                transport: Transport.TCP,
                options: {
                    port: 4223
                },
            }
        ])
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
