import { Injectable } from '@nestjs/common';
import { CreateProductRequestDto } from './dto/create-request.dto';
import { UpdateProductRequestDto } from './dto/update-request.dto';

@Injectable()
export class ProductService {
    create(createProductDto: CreateProductRequestDto) {
        return 'This action adds a new product';
    }

    findAll() {
        return `This action returns all product`;
    }

    findOne(id: number) {
        return `This action returns a #${id} product`;
    }

    update(id: number, updateProductDto: UpdateProductRequestDto) {
        return `This action updates a #${id} product`;
    }

    remove(id: number) {
        return `This action removes a #${id} product`;
    }
}
