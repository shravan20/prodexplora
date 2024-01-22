import { Module } from '@nestjs/common';
import { AppController } from './modules/user/app.controller';
import { AppService } from './modules/user/app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';

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
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
