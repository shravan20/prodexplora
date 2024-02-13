import { ProductCategory as ProductCategoryEntity } from '@entities/product-category.entity';
import { InjectModel } from '@nestjs/mongoose';
import { CatchError } from '@utils/decorators/try-catch.decorator';
import { Model } from 'mongoose';
import { CategoryRequestDto } from './dto/category-request.dto';

export class ProductCategoryRepository {
    constructor(
        @InjectModel(ProductCategoryEntity.name)
        private readonly model: Model<ProductCategoryEntity>
    ) { }

    @CatchError
    async create(dtos: CategoryRequestDto[]): Promise<ProductCategoryEntity[]> {
        const categories: ProductCategoryEntity[] = this.toEntity(dtos);
        return await this.model.create(categories);
    }

    private toEntity(dtos: any): ProductCategoryEntity[] {
        return dtos.map(dto => {
            return new this.model({
                name: dto.name,
                description: dto.description,
                slug: dto.slug
            });
        });
    }

    @CatchError
    async findById(id: string): Promise<ProductCategoryEntity | null> {
        return await this.model.findById(id);
    }

    /**
     * TODO: Add pagination support for all findAll queries
     */
    @CatchError
    async findAll(
        query: any = {},
        projection: any = {}
    ): Promise<ProductCategoryEntity[]> {
        return await this.model.find(query, projection).exec();
    }

    @CatchError
    async findByIdAndUpdate(
        categoryId: string,
        categoryData: Partial<ProductCategoryEntity>
    ): Promise<ProductCategoryEntity | null> {
        return await this.model
            .findByIdAndUpdate(categoryId, categoryData, { new: true })
            .exec();
    }

    @CatchError
    async deleteById(
        categoryId: string
    ): Promise<ProductCategoryEntity | null> {
        return await this.model.findByIdAndUpdate(categoryId, {
            isArchived: true
        });
    }
}
