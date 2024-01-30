import { Injectable } from '@nestjs/common';
import { CreateProductRatingDto } from './dto/create-product-rating.dto';
import { UpdateProductRatingDto } from './dto/update-product-rating.dto';

@Injectable()
export class ProductRatingService {
  create(createProductRatingDto: CreateProductRatingDto) {
    return 'This action adds a new productRating';
  }

  findAll() {
    return `This action returns all productRating`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productRating`;
  }

  update(id: number, updateProductRatingDto: UpdateProductRatingDto) {
    return `This action updates a #${id} productRating`;
  }

  remove(id: number) {
    return `This action removes a #${id} productRating`;
  }
}
