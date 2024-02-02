import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { DatabaseModule } from './database/database.module';
import { SwaggerSetupModule } from './docs/swagger.module';
import { ApiResponseEnvelopeInterceptor } from './middlewares/response.middleware';
import { AppController } from './modules/app-health/app.controller';
import { AppService } from './modules/app-health/app.service';
import { ProductModule } from './modules/product/product.module';
import { UserModule } from './modules/user/user.module';

/**
 * TODO: Move Controllers from Product Modules separately
 */
const modules = [
    ConfigModule.forRoot({
        isGlobal: true,
        envFilePath: join('.', '.env'),
    }),
    ServeStaticModule.forRoot({
        //  TODO: Make this configurable
        rootPath: join(__dirname, '../..', 'ui', 'dist'),
    }),
    SwaggerSetupModule,
    DatabaseModule,
    ProductModule,
    UserModule,
];

const controllers = [AppController];

const providers = [
    AppService,
    {
        provide: APP_INTERCEPTOR,
        useClass: ApiResponseEnvelopeInterceptor,
    },
];

@Module({
    imports: modules,
    controllers: controllers,
    providers: providers,
})
export class AppModule { }
