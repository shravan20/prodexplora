import { Injectable } from '@nestjs/common';
import { CreateProductDiscussionDto } from './dto/create-request.dto';
import { UpdateProductDiscussionDto } from './dto/update-request.dto';

@Injectable()
export class ProductDiscussionService {
    create(createProductDiscussionDto: CreateProductDiscussionDto) {
        return 'This action adds a new productDiscussion';
    }

    findAll() {
        return `This action returns all productDiscussion`;
    }

    findOne(id: number) {
        return `This action returns a #${id} productDiscussion`;
    }

    update(id: number, updateProductDiscussionDto: UpdateProductDiscussionDto) {
        return `This action updates a #${id} productDiscussion`;
    }

    remove(id: number) {
        return `This action removes a #${id} productDiscussion`;
    }
}
