import { Module } from '@nestjs/common';
import { AppController } from './customer.controller';
import { AppService } from './customer.service';

@Module({
    imports: [],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
