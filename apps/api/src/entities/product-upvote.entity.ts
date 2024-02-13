import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { ProductUpvoteStatus } from 'src/enums/product-upvote-status.enum';
import { CommonEntity } from './common-entity';

@Schema()
export class ProductUpvote extends CommonEntity {
    @Prop({ enum: Object.values(ProductUpvoteStatus), required: true })
    status: ProductUpvoteStatus;

    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    userId: Types.ObjectId;

    @Prop({ type: Types.ObjectId, ref: 'Product', required: true })
    productId: Types.ObjectId;
}

export const ProductUpvoteSchema = SchemaFactory.createForClass(ProductUpvote);
