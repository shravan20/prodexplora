import { Product as ProductEntity } from '@entities/product.entity';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductRequestDto } from './dtos/product-request.dto';

@Injectable()
export class ProductRepository {
    constructor(
        @InjectModel(ProductEntity.name)
        private readonly model: Model<ProductEntity>
    ) {}

    async create(dto: ProductRequestDto): Promise<ProductEntity> {
        try {
            return await await this.model.create(this.toEntity(dto));
        } catch (error) {
            throw error;
        }
    }

    private toEntity(dto: ProductRequestDto): ProductEntity {
        return new this.model({
            title: dto.title,
            description: dto.description,
            slug: dto.slug,
            categories: dto.categories,
            technologies: dto.technologies,
            createdBy: dto.createdBy,
            status: dto.status,
            isPublished: dto.isPublished,
            externalLinks: dto.externalLinks
        });
    }

    async findById(id: string): Promise<ProductEntity> {
        return await this.model.findById(id);
    }

    async findAll(query = {}, projection = {}): Promise<ProductEntity[]> {
        return await this.model.find(query, projection);
    }

    async deleteById(categoryId: string): Promise<ProductEntity | null> {
        return await this.model.findByIdAndUpdate(categoryId, {
            isArchived: true
        });
    }
}
