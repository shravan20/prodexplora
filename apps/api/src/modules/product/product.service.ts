import { ProductCategory } from '@entities/product-category.entity';
import { Product } from '@entities/product.entity';
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
    ) {}

    private static readonly RESOURCE: string = 'Product';

    @CatchError
    async create(
        createProductDto: ProductRequestDto
    ): Promise<ProductResponseDto> {
        const createdBy = await this.userService.findById(
            createProductDto.createdBy
        );

        const categories: ProductCategory[] = await Promise.all(
            createProductDto.categories.map(id =>
                this.productCategoryService.getById(id)
            )
        );

        return ProductResponseDto.from(
            await this.repository.create(createProductDto, categories)
        );
    }

    async findAll(
        query: any = {},
        projection: any = {}
    ): Promise<ProductResponseDto[]> {
        const products = await this.repository.findAll(query, projection);
        return products.map(product => ProductResponseDto.from(product));
    }

    async findById(id: string): Promise<ProductResponseDto> {
        const product: Product = await this.getById(id);
        return ProductResponseDto.from(product, true);
    }

    async getById(id: string): Promise<Product> {
        const product: Product = await this.repository.findById(id);
        this.isResourceAvailable(product, id);
        return product;
    }

    async update(
        id: string,
        updateProductDto: UpdateProductRequestDto
    ): Promise<ProductResponseDto> {
        const product: Product = await this.repository.findByIdAndPatch(
            id,
            updateProductDto
        );
        this.isResourceAvailable(product, id);
        return ProductResponseDto.from(product);
    }

    private isResourceAvailable(product: Product, id: string) {
        if (!product) {
            throw new NotFoundException(
                resourceNotFoundMessage(ProductService.RESOURCE, id)
            );
        }
    }

    async remove(id: string): Promise<ProductResponseDto> {
        const product = await this.repository.deleteById(id);
        this.isResourceAvailable(product, id);
        return ProductResponseDto.from(product);
    }
}
