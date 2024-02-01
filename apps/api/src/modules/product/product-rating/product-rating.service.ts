import { Injectable } from '@nestjs/common';
import { CreateProductRatingRequestDto } from './dto/create-request.dto';
import { UpdateProductRatingRequestDto } from './dto/update-request.dto';

@Injectable()
export class ProductRatingService {
    create(createProductRatingDto: CreateProductRatingRequestDto) {
        return 'This action adds a new productRating';
    }

    findAll() {
        return `This action returns all productRating`;
    }

    findOne(id: number) {
        return `This action returns a #${id} productRating`;
    }

    update(id: number, updateProductRatingDto: UpdateProductRatingRequestDto) {
        return `This action updates a #${id} productRating`;
    }

    remove(id: number) {
        return `This action removes a #${id} productRating`;
    }
}
