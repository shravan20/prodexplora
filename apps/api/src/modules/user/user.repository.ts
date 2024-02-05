import { User as entity } from '@entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserRepository {
    constructor(
        @InjectModel(entity.name) private readonly userModel: Model<entity>,
    ) { }

    async findAll(): Promise<entity[]> {
        return await this.userModel.find().exec();
    }

    async findOne(query: any = {}, view: any = {}): Promise<entity> {
        return await this.userModel.findOne(query, view).exec();
    }

    async findById(id: string): Promise<entity> {
        return await this.userModel.findById(id).exec();
    }

    async create(createUserDto: CreateUserDto): Promise<entity> {
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

    async findByIdAndUpdate(id: string, user: entity): Promise<entity> {
        return await this.userModel
            .findByIdAndUpdate(id, user, { new: true })
            .exec();
    }

    async findOneAndUpdate(
        query: any = {},
        update: any = {},
        options: any = {},
    ): Promise<entity> {
        return await this.userModel
            .findOneAndUpdate(query, update, { new: true, ...options })
            .exec();
    }

    async delete(id: string): Promise<entity> {
        return await this.userModel.findByIdAndDelete(id).exec();
    }
}
