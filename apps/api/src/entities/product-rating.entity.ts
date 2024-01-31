import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { CommonEntity } from './common-entity';

@Schema()
export class ProductRating extends CommonEntity {
    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    userId: Types.ObjectId;

    @Prop({ type: Types.ObjectId, ref: 'Product', required: true })
    productId: Types.ObjectId;

    @Prop({ default: false })
    isArchived: boolean;
}

export const ProductRatingSchema = SchemaFactory.createForClass(ProductRating);
