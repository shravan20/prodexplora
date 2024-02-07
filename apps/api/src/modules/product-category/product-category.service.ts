import { Injectable } from '@nestjs/common';
import { CreateCategoryRequestDto } from './dto/create-category-request.dto';
import { UpdateProductCategoryDto } from './dto/update-request.dto';

@Injectable()
export class ProductCategoryService {
    create(createProductCategoryDto: CreateCategoryRequestDto) {
        return 'This action adds a new productCategory';
    }

    findAll() {
        return `This action returns all productCategory`;
    }

    findOne(id: number) {
        return `This action returns a #${id} productCategory`;
    }

    update(id: number, updateProductCategoryDto: UpdateProductCategoryDto) {
        return `This action updates a #${id} productCategory`;
    }

    remove(id: number) {
        return `This action removes a #${id} productCategory`;
    }
}
