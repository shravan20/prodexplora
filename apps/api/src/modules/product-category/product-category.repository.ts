import { ProductCategory as ProductCategoryEntity } from '@entities/product-category.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

export class ProductRepository {
    constructor(
        @InjectModel(ProductCategoryEntity.name)
        private readonly model: Model<ProductCategoryEntity>,
    ) { }

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

    async findById(id: string): Promise<ProductCategoryEntity | null> {
        return await this.model.findById(id);
    }

    /**
     * TODO: Add pagination support for all findAll queries
     */
    async findAll(query: any, projection: any): Promise<ProductCategoryEntity[]> {
        return await this.model.find(query, projection).exec();
    }


    async findByIdAndUpdate(categoryId: string, categoryData: Partial<ProductCategoryEntity>): Promise<ProductCategoryEntity | null> {
        return await this.model.findByIdAndUpdate(categoryId, categoryData, { new: true }).exec();
    }

    async deleteById(categoryId: string): Promise<ProductCategoryEntity | null> {
        return await this.findByIdAndUpdate(categoryId, {
            isArchived: true,
        });
    }

}
