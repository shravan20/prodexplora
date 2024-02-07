import { SecretManagerModule } from '@configs/secret-manager.module';
import { LoggingInterceptor } from '@middlewares/api-logger.middleware';
import { ProductCategoryModule } from '@modules/product-category/product-category.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { SwaggerSetupModule } from './docs/swagger.module';
import { ApiResponseEnvelopeInterceptor } from './middlewares/response.middleware';
import { AppController } from './modules/app-health/app.controller';
import { AppService } from './modules/app-health/app.service';
import { ProductModule } from './modules/product/product.module';
import { UserModule } from './modules/user/user.module';

const modules = [
    ConfigModule.forRoot({
        isGlobal: true,
        envFilePath: [join('.', '.env'), join('.', '.env.production')],
        cache: process.env.ENABLE_CONFIG_CACHING === '1',
    }),
    ServeStaticModule.forRoot({
        //  TODO: Make this configurable
        rootPath: join(__dirname, '../..', 'ui', 'dist'),
    }),
    SwaggerSetupModule,
    UserModule,
    ProductCategoryModule,
    ProductModule,
    SecretManagerModule,
    MongooseModule.forRoot(process.env.MONGODB_DB_URL),
];

const controllers = [AppController];

const providers = [
    AppService,
    {
        provide: APP_INTERCEPTOR,
        useClass: ApiResponseEnvelopeInterceptor,
    },
    {
        provide: APP_INTERCEPTOR,
        useClass: LoggingInterceptor,
    },
];

@Module({
    imports: modules,
    controllers: controllers,
    providers: providers,
})
export class AppModule {}
