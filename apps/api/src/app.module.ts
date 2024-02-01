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
import { ProductController } from './modules/product/product.controller';
import { ProductUpvoteController } from './modules/product/product-upvote/product-upvote.controller';
import { ProductRatingController } from './modules/product/product-rating/product-rating.controller';
import { ProductDiscussionController } from './modules/product/product-discussion/product-discussion.controller';
import { UserController } from './modules/user/user.controller';
import { ProductService } from './modules/product/product.service';
import { ProductUpvoteService } from './modules/product/product-upvote/product-upvote.service';
import { ProductRatingService } from './modules/product/product-rating/product-rating.service';
import { ProductDiscussionService } from './modules/product/product-discussion/product-discussion.service';
import { UserService } from './modules/user/user.service';
import { ProductCategoryController } from './modules/product-category/product-category.controller';
import { ProductCategoryService } from './modules/product-category/product-category.service';

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
];

const controllers = [
    AppController,
    ProductController,
    ProductUpvoteController,
    ProductRatingController,
    ProductDiscussionController,
    ProductCategoryController,
    UserController,
];

const providers = [
    AppService,
    ProductService,
    ProductUpvoteService,
    ProductRatingService,
    ProductDiscussionService,
    ProductCategoryService,
    UserService,
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
export class AppModule {}
