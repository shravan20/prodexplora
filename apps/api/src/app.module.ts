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
import { ProductService } from './modules/product/product.service';
import { ProductUpvoteService } from './modules/product/product-upvote/product-upvote.service';
import { ProductRatingService } from './modules/product/product-rating/product-rating.service';
import { ProductDiscussionService } from './modules/product/product-discussion/product-discussion.service';
import { UserService } from './modules/user/user.service';
import { ProductCategoryController } from './modules/product-category/product-category.controller';
import { ProductCategoryService } from './modules/product-category/product-category.service';
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
    DatabaseModule,
    SwaggerSetupModule,
    ProductModule,
    UserModule
];

const controllers = [
    AppController
];

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
