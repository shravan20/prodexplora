import { Injectable, NotFoundException } from '@nestjs/common';
import { resourceNotFoundMessage } from '@utils/validations/error-message-validation';
import { CategoryRequestDto } from './dto/category-request.dto';
import { CategoryResponseDto } from './dto/category-response.dto';
import { UpdateProductCategoryDto } from './dto/update-category.dto';
import { ProductCategoryRepository } from './product-category.repository';

@Injectable()
export class ProductCategoryService {
    constructor(private readonly repository: ProductCategoryRepository) {}

    private static readonly RESOURCE: string = 'Product-Category';

    async create(dtos: CategoryRequestDto[]): Promise<CategoryResponseDto[]> {
        const categories = await this.repository.create(dtos);
        return categories.map(category => CategoryResponseDto.from(category));
    }

    async findAll(): Promise<CategoryResponseDto[]> {
        const categories = await this.repository.findAll();
        return categories.map(category => CategoryResponseDto.from(category));
    }

    async findById(id: string): Promise<CategoryResponseDto> {
        const category = await this.getById(id);
        return CategoryResponseDto.from(category);
    }

    async getById(id: string) {
        const category = await this.repository.findById(id);
        if (!category) {
            throw new NotFoundException(
                resourceNotFoundMessage(ProductCategoryService.RESOURCE, id)
            );
        }
        return category;
    }

    update(id: string, updateProductCategoryDto: UpdateProductCategoryDto) {
        return `This action updates a #${id} productCategory`;
    }

    async remove(id: string): Promise<CategoryResponseDto> {
        const archivedCategory = await this.repository.deleteById(id);
        if (!archivedCategory) {
            throw new NotFoundException(
                resourceNotFoundMessage(ProductCategoryService.RESOURCE, id)
            );
        }
        return CategoryResponseDto.from(archivedCategory);
    }
}
