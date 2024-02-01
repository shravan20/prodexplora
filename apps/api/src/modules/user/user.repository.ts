import { User } from '@entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserRepository {
    constructor(
        @InjectModel(User.name) private readonly userModel: Model<User>,
    ) { }

    async findAll(): Promise<User[]> {
        return await this.userModel.find().exec();
    }

    async findById(id: string): Promise<User> {
        return await this.userModel.findById(id).exec();
    }

    async create(user: User): Promise<User> {
        const createdUser = new this.userModel(user);
        return await createdUser.save();
    }

    async update(id: string, user: User): Promise<User> {
        return await this.userModel.findByIdAndUpdate(id, user, { new: true }).exec();
    }

    async delete(id: string): Promise<User> {
        return await this.userModel.findByIdAndDelete(id).exec();
    }
}
