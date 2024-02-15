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
    ) { }

    @CatchError
    async create(
        productId: string,
        productUpvoteRequestDto: ProductUpvoteRequestDto
    ) {
        const createdBy = await this.userService.getById(
            productUpvoteRequestDto.userId
        );
        const product = await this.productService.getById(productId);
        return this.repository.create(productUpvoteRequestDto, product, createdBy);
    }

    findAll() {
        return `This action returns all productUpvote`;
    }

    findOne(id: number) {
        return `This action returns a #${id} productUpvote`;
    }

    remove(id: number) {
        return `This action removes a #${id} productUpvote`;
    }
}
