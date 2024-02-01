import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { CommonEntity } from './common-entity';

interface OpenIdProvider {
    provider: string;
    id: string;
}

@Schema({ timestamps: true })
export class User extends CommonEntity {
    @Prop({ required: true, unique: true })
    username: string;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop()
    profilePicture: string;

    @Prop()
    bio: string;

    @Prop({ type: [Types.ObjectId] })
    productFollowing: Types.ObjectId[];

    @Prop({ default: [] })
    linkedAccounts: OpenIdProvider[];
}

export const UserSchema = SchemaFactory.createForClass(User);
