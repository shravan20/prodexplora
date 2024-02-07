import { User as UserEntity } from '@entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserRepository {
    constructor(
        @InjectModel(UserEntity.name) private readonly userModel: Model<UserEntity>,
    ) { }

    async findAll(): Promise<UserEntity[]> {
        return await this.userModel.find().exec();
    }

    async findOne(query: any = {}, view: any = {}): Promise<UserEntity> {
        return await this.userModel.findOne(query, view).exec();
    }

    async findById(id: string): Promise<UserEntity> {
        return await this.userModel.findById(id).exec();
    }

    async create(createUserDto: CreateUserDto): Promise<UserEntity> {
        const user = this.toEntity(createUserDto);
        return await this.userModel.create(user);
    }

    private toEntity(createUserDto: CreateUserDto) {
        return new this.userModel({
            firstName: createUserDto.firstName,
            lastName: createUserDto.lastName,
            email: createUserDto.email,
            profilePicture: createUserDto.profilePicture,
            bio: createUserDto.bio,
            username: createUserDto.email.split('@')[0],
            loginProvider: createUserDto.authProvider,
        });
    }

    async findByIdAndUpdate(id: string, user: UserEntity): Promise<UserEntity> {
        return await this.userModel
            .findByIdAndUpdate(id, user, { new: true })
            .exec();
    }

    async findOneAndUpdate(
        query: any = {},
        update: any = {},
        options: any = {},
    ): Promise<UserEntity> {
        return await this.userModel
            .findOneAndUpdate(query, update, { new: true, ...options })
            .exec();
    }

    async delete(id: string): Promise<UserEntity> {
        return await this.userModel.findByIdAndDelete(id).exec();
    }
}
