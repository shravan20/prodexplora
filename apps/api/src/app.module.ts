import { Module } from '@nestjs/common';
import { AppController } from './modules/user/app.controller';
import { AppService } from './modules/user/app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseModule } from './database/database.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: join('.', '.env'),
        }),
        ServeStaticModule.forRoot({
            /**
             * TOOO: Make this configurable
             */
            rootPath: join(__dirname, '../..', 'ui', 'dist'),
        }),
        DatabaseModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
