import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { CommonEntity } from './common-entity';

@Schema({ timestamps: true })
export class ProductCategory extends CommonEntity {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    description: string;

    @Prop()
    slug: string;
}

export const ProductCategorySchema =
    SchemaFactory.createForClass(ProductCategory);
