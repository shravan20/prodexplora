import { User as UserEntity } from '@entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserRequestDto } from './dto/user-request.dto';

@Injectable()
export class UserRepository {
    constructor(
        @InjectModel(UserEntity.name)
        private readonly model: Model<UserEntity>,
    ) { }

    async findAll(): Promise<UserEntity[]> {
        return await this.model.find().exec();
    }

    async findOne(query: any = {}, view: any = {}): Promise<UserEntity> {
        return await this.model.findOne(query, view).exec();
    }

    async findById(id: string): Promise<UserEntity> {
        return await this.model.findById(id).exec();
    }

    async create(createUserDto: UserRequestDto): Promise<UserEntity> {
        const user = this.toEntity(createUserDto);
        return await this.model.create(user);
    }

    private toEntity(createUserDto: UserRequestDto) {
        return new this.model({
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
        return await this.model
            .findByIdAndUpdate(id, user, { new: true })
            .exec();
    }

    async findOneAndUpdate(
        query: any = {},
        update: any = {},
        options: any = {},
    ): Promise<UserEntity> {
        return await this.model
            .findOneAndUpdate(query, update, { new: true, ...options })
            .exec();
    }

    async deleteById(id: string): Promise<UserEntity> {
        return await this.model
            .findByIdAndUpdate(id, {
                isArchived: true,
            })
            .exec();
    }
}
