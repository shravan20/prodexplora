import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { CommonEntity } from './common-entity';
import { Types } from 'mongoose';
import { ProductLaunchStatus } from 'src/enums/product-launch-status.enum';

@Schema()
export class Product extends CommonEntity {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    description: string;

    @Prop({ type: [{ type: Types.ObjectId, ref: 'Category' }] })
    categories: Types.ObjectId[];

    @Prop({ type: [String] })
    technologies: string[];

    @Prop({ type: Types.ObjectId, ref: 'User' })
    createdBy: Types.ObjectId;

    @Prop({
        enum: Object.values(ProductLaunchStatus),
        default: ProductLaunchStatus.PRELAUNCH,
    })
    status: ProductLaunchStatus;

    @Prop({ default: false })
    isPublish: boolean;

    @Prop({ type: [{ platform: String, link: String }] })
    externalLinks: { platform: string; link: string }[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
