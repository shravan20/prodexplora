import { ProductUpvote as ProductUpvoteEntity } from '@entities/product-upvote.entity';
import { Product } from '@entities/product.entity';
import { User } from '@entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductUpvoteRequestDto } from './dto/upvote-request.dto';

@Injectable()
export class ProductUpvoteRepository {
    constructor(
        @InjectModel(ProductUpvoteEntity.name)
        private readonly model: Model<ProductUpvoteEntity>
    ) { }

    async create(productUpvoteDto: ProductUpvoteRequestDto, product: Product, user: User) {
        let data = this.toEntity(productUpvoteDto, product, user);
    }

    private toEntity(dto: ProductUpvoteRequestDto, product: Product, user: User) {
        return new this.model({
            status: dto.status,
            userId: user,
            productId: product
        });
    }

    async findAll() { }

    async deleteById() { }
}


