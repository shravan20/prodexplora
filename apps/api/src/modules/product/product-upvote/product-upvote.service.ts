import { UserService } from '@modules/user/user.service';
import { Injectable } from '@nestjs/common';
import { CatchError } from '@utils/decorators/try-catch.decorator';
import { ProductService } from '../product.service';
import { UpdateProductUpvoteRequestDto } from './dto/update-upvote.dto';
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
    ) {
        const createdBy = await this.userService.findById(
            productUpvoteRequestDto.userId
        );
        const product = await this.productService.findById(productId);
        // return this.repository.create(productUpvoteRequestDto, product, createdBy);
        return null;
    }

    findAll() {
        return `This action returns all productUpvote`;
    }

    findOne(id: number) {
        return `This action returns a #${id} productUpvote`;
    }

    update(id: number, updateProductUpvoteDto: UpdateProductUpvoteRequestDto) {
        return `This action updates a #${id} productUpvote`;
    }

    remove(id: number) {
        return `This action removes a #${id} productUpvote`;
    }
}
