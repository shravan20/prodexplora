import { Injectable } from '@nestjs/common';
import { UpdateProductUpvoteRequestDto } from './dto/update-upvote.dto';
import { ProductUpvoteRequestDto } from './dto/upvote-request.dto';

@Injectable()
export class ProductUpvoteService {
    create(createProductUpvoteDto: ProductUpvoteRequestDto) {
        return 'This action adds a new productUpvote';
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
