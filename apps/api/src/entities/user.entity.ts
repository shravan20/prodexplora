import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Types, model } from 'mongoose';
import { CommonEntity } from './common-entity';

interface OpenIdProvider {
    provider: string;
    id: string;
}

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
export const UserModel = model('User', UserSchema);