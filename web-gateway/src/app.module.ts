import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import MSTypes from '../../common/microservice.types';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
    imports: [
        ClientsModule.register([{
            name: MSTypes.CAR,
            transport: Transport.TCP,
            options: {
                port: 4222
            },
        }]
    )],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
