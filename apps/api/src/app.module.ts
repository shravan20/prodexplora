import { Module } from '@nestjs/common';
import { AppController } from './modules/app-health/app.controller';
import { AppService } from './modules/app-health/app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
// import { DatabaseModule } from './database/database.module';
import { SwaggerSetupModule } from './docs/swagger.module';
import { ApiResponseEnvelopeInterceptor } from './middlewares/response.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';

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
        SwaggerSetupModule,
        TypeOrmModule.forRoot({
            type: process.env.DB_TYPE as any,
            host: process.env.PG_HOST,
            port: parseInt(process.env.PG_PORT),
            username: process.env.PG_USER,
            password: process.env.PG_PASSWORD,
            database: process.env.PG_DB,
            entities: [join(__dirname, 'entities/*.entity{.ts,.js}')],
            synchronize: true,
        }),
    ],
    controllers: [AppController],
    providers: [
        AppService,
        {
            provide: APP_INTERCEPTOR,
            useClass: ApiResponseEnvelopeInterceptor,
        },
    ],
})
export class AppModule {
    /**
     *
     */
    constructor() {
        console.log(__dirname);
    }
}
