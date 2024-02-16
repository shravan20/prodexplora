import { Product } from '@entities/product.entity';
import { SocialLink } from '@entities/types/social-link.type';
import { CategoryResponseDto } from '@modules/product-category/dto/category-response.dto';
import { ApiProperty } from '@nestjs/swagger';
import { ProductLaunchStatus } from 'src/enums/product-launch-status.enum';

export class ProductResponseDto {
    @ApiProperty()
    readonly id: string;

    @ApiProperty()
    readonly title: string;

    @ApiProperty()
    readonly description: string;

    @ApiProperty()
    readonly slug: string;

    @ApiProperty()
    readonly categories: CategoryResponseDto[] | string[] = [];

    @ApiProperty()
    readonly technologies: string[];

    @ApiProperty()
    readonly createdBy: string;

    @ApiProperty()
    readonly status: ProductLaunchStatus;

    @ApiProperty()
    readonly isPublished: boolean;

    @ApiProperty()
    readonly externalLinks: SocialLink[];

    constructor(product: Product, populateCategories: boolean = false) {
        this.id = product._id;
        this.title = product.title;
        this.description = product.description;
        this.slug = product.slug;
        this.technologies = product.technologies;
        this.externalLinks = product.externalLinks;
        this.status = product.status;
        this.isPublished = product.isPublished;

        if (populateCategories) {
            this.categories = product.categories.map(category => {
                return CategoryResponseDto.from(category);
            });
        } else {
            this.categories = product.categories.map(category => category._id);
        }
    }

    static from(
        product: Product,
        populateCategories: boolean = false
    ): ProductResponseDto {
        return new ProductResponseDto(product, populateCategories);
    }
}
