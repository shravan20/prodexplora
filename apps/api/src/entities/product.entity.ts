import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { ProductLaunchStatus } from 'src/enums/product-launch-status.enum';
import { CommonEntity } from './common-entity';
import { SocialLink } from './types/social-link.type';

@Schema({ timestamps: true })
export class Product extends CommonEntity {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true, unique: true, index: true })
    slug: string;

    @Prop({ type: [{ type: Types.ObjectId, ref: 'Category' }] })
    categories: Types.ObjectId[];

    @Prop({ type: [String] })
    technologies: string[];

    @Prop({ type: Types.ObjectId, ref: 'User' })
    createdBy: Types.ObjectId;

    @Prop({
        enum: Object.values(ProductLaunchStatus),
        default: ProductLaunchStatus.PRELAUNCH
    })
    status: ProductLaunchStatus;

    @Prop({ default: false })
    isPublished: boolean;

    @Prop({ type: [{ platform: String, link: String }] })
    externalLinks: SocialLink[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
