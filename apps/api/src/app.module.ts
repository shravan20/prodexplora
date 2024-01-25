import { Module } from '@nestjs/common';
import { AppController } from './modules/app-health/app.controller';
import { AppService } from './modules/app-health/app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { DatabaseModule } from './database/database.module';
import { SwaggerSetupModule } from './docs/swagger.module';
import { ApiResponseEnvelopeInterceptor } from './middlewares/response.middleware';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: join('.', '.env'),
        }),
        ServeStaticModule.forRoot({
            //  TODO: Make this configurable
            rootPath: join(__dirname, '../..', 'ui', 'dist'),
        }),
        DatabaseModule,
        SwaggerSetupModule,
    ],
    controllers: [AppController],
    providers: [AppService, {
        provide: APP_INTERCEPTOR,
        useClass: ApiResponseEnvelopeInterceptor,
    },],
})
export class AppModule { }
