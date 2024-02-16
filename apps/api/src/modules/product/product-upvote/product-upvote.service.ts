import { ProductUpvote } from '@entities/product-upvote.entity';
import { UserService } from '@modules/user/user.service';
import { Injectable } from '@nestjs/common';
import { CatchError } from '@utils/decorators/try-catch.decorator';
import { ProductService } from '../product.service';
import { ProductUpvoteRequestDto } from './dto/upvote-request.dto';
import { ProductUpvoteRepository } from './product-upvote.repository';

@Injectable()
export class ProductUpvoteService {
    constructor(
        private readonly productService: ProductService,
        private readonly userService: UserService,
        private readonly repository: ProductUpvoteRepository
    ) {}

    @CatchError
    async create(
        productId: string,
        productUpvoteRequestDto: ProductUpvoteRequestDto
    ): Promise<ProductUpvote> {
        const createdBy = await this.userService.getById(
            productUpvoteRequestDto.userId
        );
        const product = await this.productService.getById(productId);

        const query: any = {
            productId: product._id,
            userId: createdBy._id
        };

        const update: any = {
            ...query,
            status: productUpvoteRequestDto.status
        };

        const options: any = { upsert: true };

        return await this.repository.findOneAndUpdate(query, update, options);
    }

    async findAll(): Promise<ProductUpvote[]> {
        return await this.repository.findAll();
    }

    findOne(id: number) {
        return `This action returns a #${id} productUpvote`;
    }

    remove(id: number) {
        return `This action removes a #${id} productUpvote`;
    }
}
