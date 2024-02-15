import { ProductUpvote as ProductUpvoteEntity } from '@entities/product-upvote.entity';
import { Product } from '@entities/product.entity';
import { User } from '@entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CatchError } from '@utils/decorators/try-catch.decorator';
import { Model } from 'mongoose';
import { ProductUpvoteRequestDto } from './dto/upvote-request.dto';

@Injectable()
export class ProductUpvoteRepository {
    constructor(
        @InjectModel(ProductUpvoteEntity.name)
        private readonly model: Model<ProductUpvoteEntity>
    ) {}

    @CatchError
    async create(
        productUpvoteDto: ProductUpvoteRequestDto,
        product: Product,
        user: User
    ): Promise<ProductUpvoteEntity> {
        const data = this.toEntity(productUpvoteDto, product, user);
        return await this.model.create(data);
    }

    private toEntity(
        dto: ProductUpvoteRequestDto,
        product: Product,
        user: User
    ) {
        return new this.model({
            status: dto.status,
            userId: user._id,
            productId: product._id
        });
    }

    async findAll(): Promise<ProductUpvoteEntity[]> {
        return await this.model.find();
    }

    async deleteById(id: string, query = {}): Promise<ProductUpvoteEntity> {
        return await this.model.findByIdAndUpdate(id, { isArchived: true });
    }
}
