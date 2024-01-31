import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { CommonEntity } from './common-entity';
import { Types } from 'mongoose';

export enum LaunchStatus {
    PRELAUNCH = 'PRELAUNCH',
    LAUNCHED = 'LAUNCHED',
}

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

    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    userId: Types.ObjectId;

    @Prop({ enum: Object.values(LaunchStatus), default: LaunchStatus.PRELAUNCH })
    status: LaunchStatus;

    @Prop({ default: false })
    isPublish: boolean;

    @Prop({ type: [{ platform: String, link: String }] })
    externalLinks: { platform: string; link: string }[];

}

export const ProductSchema = SchemaFactory.createForClass(Product);
