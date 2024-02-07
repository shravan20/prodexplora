import { ProductCategory as ProductCategoryEntity } from '@entities/product-category.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

export class ProductRepository {
    constructor(
        @InjectModel(ProductCategoryEntity.name)
        private readonly model: Model<ProductCategoryEntity>,
    ) {}

    async create(dtos: [any]): Promise<ProductCategoryEntity[]> {
        const categories: ProductCategoryEntity[] = this.toEntity(dtos);
        return await this.model.create(categories);
    }

    private toEntity(dtos: any): ProductCategoryEntity[] {
        return dtos.map((dto) => {
            return new this.model({
                name: dto.name,
                description: dto.description,
                slug: dto.slug,
            });
        });
    }
}
