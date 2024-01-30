import { Injectable } from '@nestjs/common';
import { CreateProductUpvoteDto } from './dto/create-product-upvote.dto';
import { UpdateProductUpvoteDto } from './dto/update-product-upvote.dto';

@Injectable()
export class ProductUpvoteService {
  create(createProductUpvoteDto: CreateProductUpvoteDto) {
    return 'This action adds a new productUpvote';
  }

  findAll() {
    return `This action returns all productUpvote`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productUpvote`;
  }

  update(id: number, updateProductUpvoteDto: UpdateProductUpvoteDto) {
    return `This action updates a #${id} productUpvote`;
  }

  remove(id: number) {
    return `This action removes a #${id} productUpvote`;
  }
}
