import { Injectable } from '@nestjs/common';
import { ProductRequestDto } from './dtos/product-request.dto';
import { UpdateProductRequestDto } from './dtos/update-product.dto';

@Injectable()
export class ProductService {
    create(createProductDto: ProductRequestDto) {
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
