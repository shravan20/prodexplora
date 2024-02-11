import { ProductCategoryService } from '@modules/product-category/product-category.service';
import { UserService } from '@modules/user/user.service';
import { Injectable } from '@nestjs/common';
import { ProductRequestDto } from './dtos/product-request.dto';
import { ProductResponseDto } from './dtos/product-response.dto';
import { UpdateProductRequestDto } from './dtos/update-product.dto';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
    constructor(
        private readonly userService: UserService,
        private readonly productCategoryService: ProductCategoryService,
        private readonly repository: ProductRepository
    ) { }

    async create(
        createProductDto: ProductRequestDto
    ): Promise<ProductResponseDto> {

        let createdBy = await this.userService.findById(createProductDto.createdBy);
        let categories = createProductDto.categories.map(async (id) => {
            return await this.productCategoryService.findById(id)
        });


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
