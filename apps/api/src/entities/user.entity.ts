import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { CommonEntity } from './common-entity';
import { IOpenIdProvider } from './interfaces/openid-provider.interface';

@Schema({ timestamps: true })
export class User extends CommonEntity {
    @Prop({ required: true, unique: true })
    username: string;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop()
    firstName: string;

    @Prop()
    lastName: string;

    @Prop({ required: false })
    profilePicture: string;

    @Prop({ required: false })
    bio: string;

    @Prop({ type: [Types.ObjectId], required: false })
    productFollowing: Types.ObjectId[];

    @Prop({ default: [] })
    loginProvider: IOpenIdProvider[];
}

export const UserSchema = SchemaFactory.createForClass(User);
