import { Module } from '@nestjs/common';
import { AppController } from './car.controller';
import { AppService } from './car.service';

@Module({
    imports: [],
    controllers: [AppController],
    providers: [AppService],
})

export class AppModule {}