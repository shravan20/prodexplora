import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class CommonEntity extends Document {

    @Prop({ type: Types.ObjectId })
    createdBy: Types.ObjectId;

    @Prop({ type: Types.ObjectId })
    updatedBy: Types.ObjectId;

    @Prop({ default: false })
    isArchived: boolean;
}

export const CommonSchema = SchemaFactory.createForClass(CommonEntity);
