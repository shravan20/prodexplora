import { Product as ProductEntity } from '@entities/product.entity';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductRequestDto } from './dtos/product-request.dto';
import { UpdateProductRequestDto } from './dtos/update-product.dto';

@Injectable()
export class ProductRepository {
    constructor(
        @InjectModel(ProductEntity.name)
        private readonly model: Model<ProductEntity>
    ) { }

    async create(dto: ProductRequestDto, categories): Promise<ProductEntity> {
        try {
            return await this.model.create(this.toEntity(dto, categories));
        } catch (error) {
            throw error;
        }
    }

    private toEntity(dto: ProductRequestDto, categories: []): ProductEntity {
        return new this.model({
            title: dto.title,
            description: dto.description,
            slug: dto.slug,
            categories: categories,
            technologies: dto.technologies,
            createdBy: dto.createdBy,
            status: dto.status,
            isPublished: dto.isPublished,
            externalLinks: dto.externalLinks
        });
    }

    async findById(
        id: string,
        populate: string[] = []
    ): Promise<ProductEntity> {
        return await this.model.findById(id).populate('categories').exec();
    }

    async findAll(query = {}, projection = {}): Promise<ProductEntity[]> {
        return await this.model.find(query, projection);
    }

    async deleteById(id: string): Promise<ProductEntity | null> {
        return await this.model.findByIdAndUpdate(id, {
            isArchived: true
        });
    }

    async findByIdAndPatch(id: string, body: UpdateProductRequestDto): Promise<ProductEntity> {
        return await this.model.findByIdAndUpdate(id,
            { $set: body }
            , { new: true });
    }
}
