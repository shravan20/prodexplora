import { ProductCategory } from '@entities/product-category.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CategoryResponseDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    slug: string;

    constructor(category: ProductCategory) {
        this.id = category._id;
        this.description = category.description;
        this.slug = category.slug;
        this.name = category.name;
    }

    static from(category: ProductCategory): CategoryResponseDto {
        return new CategoryResponseDto(category);
    }
}
