import { Product, ProductSchema } from '@entities/product.entity';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductDiscussionModule } from './product-discussion/product-discussion.module';
import { ProductRatingModule } from './product-rating/product-rating.module';
import { ProductUpvoteModule } from './product-upvote/product-upvote.module';
import { ProductController } from './product.controller';
import { ProductRepository } from './product.repository';
import { ProductService } from './product.service';

@Module({

    controllers: [ProductController],
    providers: [ProductService, ProductRepository],
    imports: [ProductUpvoteModule, ProductRatingModule, ProductDiscussionModule,
        MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    ]
})
export class ProductModule { }
