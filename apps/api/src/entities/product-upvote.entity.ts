import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { CommonEntity } from './common-entity';

export enum UpvoteStatus {
    UP_VOTE = 'UP_VOTE',
    DOWN_VOTE = 'DOWN_VOTE',
}

@Schema()
export class ProductUpvote extends CommonEntity {
    @Prop({ enum: Object.values(UpvoteStatus), required: true })
    status: UpvoteStatus;

    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    userId: Types.ObjectId;

    @Prop({ type: Types.ObjectId, ref: 'Product', required: true })
    productId: Types.ObjectId;
}

export const ProductUpvoteSchema = SchemaFactory.createForClass(ProductUpvote);
