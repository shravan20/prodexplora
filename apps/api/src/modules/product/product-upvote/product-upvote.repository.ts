import {
    ProductUpvote,
    ProductUpvote as ProductUpvoteEntity
} from '@entities/product-upvote.entity';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductUpvoteRepository {
    constructor(
        @InjectModel(ProductUpvote.name)
        private readonly model: Model<ProductUpvoteEntity>
    ) {}

    async create() {}

    async findById() {}

    async findAll() {}

    async deleteById() {}
}
