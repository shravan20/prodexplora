import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { ProductUpvoteStatus } from 'src/enums/product-upvote-status.enum';
import { CommonEntity } from './common-entity';
import { Product } from './product.entity';
import { User } from './user.entity';

@Schema()
export class ProductUpvote extends CommonEntity {
    @Prop({ enum: Object.values(ProductUpvoteStatus), required: true })
    status: ProductUpvoteStatus;

    @Prop({ type: Types.ObjectId, ref: User.name, required: true })
    userId: User;

    @Prop({ type: Types.ObjectId, ref: Product.name, required: true })
    productId: Product;
}

export const ProductUpvoteSchema = SchemaFactory.createForClass(ProductUpvote);
