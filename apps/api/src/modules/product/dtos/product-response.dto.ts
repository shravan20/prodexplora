import { Product } from "@entities/product.entity";
import { SocialLink } from "@entities/types/social-link.type";
import { ApiProperty } from "@nestjs/swagger";
import { ProductLaunchStatus } from "src/enums/product-launch-status.enum";

export class ProductResponseDto {

    @ApiProperty()
    readonly title: string;

    @ApiProperty()
    readonly description: string;

    @ApiProperty()
    readonly slug: string;

    @ApiProperty()
    readonly categories: string[];

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

    constructor(product: Product) {
        this.title = product.title;
        this.description = product.description;
        this.slug = product.slug;
        this.technologies = product.technologies;
        this.externalLinks = product.externalLinks;
        this.status = product.status;
        this.isPublished = product.isPublished;
        this.categories = product.categories.map(category => {
            return category._id.toHexString()
        });
    }

    static from(product: Product): ProductResponseDto {
        return new ProductResponseDto(product);
    }

}
