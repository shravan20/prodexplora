import {
    ProductCategory,
    ProductCategorySchema
} from '@entities/product-category.entity';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductCategoryController } from './product-category.controller';
import { ProductCategoryRepository } from './product-category.repository';
import { ProductCategoryService } from './product-category.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: ProductCategory.name, schema: ProductCategorySchema }
        ])
    ],
    controllers: [ProductCategoryController],
    providers: [ProductCategoryRepository, ProductCategoryService]
})
export class ProductCategoryModule {}
