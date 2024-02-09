import { Injectable } from '@nestjs/common';
import { ProductRequestDto } from './dtos/product-request.dto';
import { ProductResponseDto } from './dtos/product-response.dto';
import { UpdateProductRequestDto } from './dtos/update-product.dto';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
    constructor(private readonly repository: ProductRepository) {}

    async create(
        createProductDto: ProductRequestDto
    ): Promise<ProductResponseDto> {
        return ProductResponseDto.from(
            await this.repository.create(createProductDto)
        );
    }

    async findAll() {
        return `This action returns all product`;
    }

    async findOne(id: number) {
        return `This action returns a #${id} product`;
    }

    async update(id: number, updateProductDto: UpdateProductRequestDto) {
        return `This action updates a #${id} product`;
    }

    async remove(id: number) {
        return `This action removes a #${id} product`;
    }
}
