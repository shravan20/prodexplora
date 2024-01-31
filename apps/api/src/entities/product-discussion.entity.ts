import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { CommonEntity } from './common-entity';

@Schema({ timestamps: true })
export class ProductDiscussion extends CommonEntity {
    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    userId: Types.ObjectId;

    @Prop({ type: Types.ObjectId, ref: 'Product', required: true })
    productId: Types.ObjectId;

    @Prop({ required: true })
    content: string;

    @Prop({ type: Types.ObjectId, ref: 'ProductDiscussion' })
    replyTo: Types.ObjectId;
}

export const ProductDiscussionSchema =
    SchemaFactory.createForClass(ProductDiscussion);
