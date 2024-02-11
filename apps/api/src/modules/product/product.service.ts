import { ProductCategoryService } from '@modules/product-category/product-category.service';
import { UserService } from '@modules/user/user.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CatchError } from '@utils/decorators/try-catch.decorator';
import { resourceNotFoundMessage } from '@utils/validations/error-message-validation';
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

    private static readonly RESOURCE: string = 'Product';

    @CatchError
    async create(
        createProductDto: ProductRequestDto
    ): Promise<ProductResponseDto> {
        const createdBy = await this.userService.findById(
            createProductDto.createdBy
        );

        const categories = await Promise.all(
            createProductDto.categories.map(id =>
                this.productCategoryService.findById(id)
            )
        );

        return ProductResponseDto.from(
            await this.repository.create(createProductDto)
        );
    }

    async findAll() {
        return `This action returns all product`;
    }

    async findById(id: string) {
        let product = this.repository.findById(id);
        if (!product) {
            throw new NotFoundException(resourceNotFoundMessage(ProductService.RESOURCE, id));
        }
        return;
        return `This action returns a #${id} product`;
    }

    async update(id: number, updateProductDto: UpdateProductRequestDto) {
        return `This action updates a #${id} product`;
    }

    async remove(id: number) {
        return `This action removes a #${id} product`;
    }
}
