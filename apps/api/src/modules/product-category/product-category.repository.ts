import { ProductCategory as ProductCategoryEntity } from "@entities/product-category.entity";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";


export class ProductRepository {
    constructor(
        @InjectModel(ProductCategoryEntity.name) private readonly productCategoryModel: Model<ProductCategoryEntity>,
    ) { }


    async create(dtos: [any]): Promise<ProductCategoryEntity> {
        const category: ProductCategoryEntity = this.toEntity(dto);
        return (await this.productCategoryModel.create(category)).toJSON();
    }

    private toEntity(dtos: any): ProductCategoryEntity[] {
        return dtos.map(dto => {
            return new this.productCategoryModel({
                name: dto.name,
                description: dto.description,
                slug: dto.slug
            });
        });
    }

}
