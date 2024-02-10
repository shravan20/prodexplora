import { SecretManagerModule } from '@configs/secret-manager.module';
import { User, UserSchema } from '@entities/user.entity';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

@Module({
    imports: [
        JwtModule.register({
            secret: process.env.JWT_SECRET_KEY,
            signOptions: { expiresIn: '60s' },
        }),
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
        SecretManagerModule,
    ],
    controllers: [UserController],
    providers: [UserRepository, UserService],
    exports: [JwtModule],
})
export class UserModule { }
