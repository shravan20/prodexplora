import { User } from '@entities/user.entity';
import { Injectable } from '@nestjs/common';
import { AuthRequestDto } from './dto/auth-request.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {

    constructor(private readonly userRepository: UserRepository) { }


    async signIn(createAuthDto: AuthRequestDto) {
        return 'This action adds a new auth';
    }

    async create(createUserDto: CreateUserDto) {

        let emailQuery = {
            email: createUserDto.email
        }
        let user: User = await this.userRepository.findOne(emailQuery);

        if (user) {
            return user;
        }

        return await this.userRepository.create(createUserDto);
    }

    findAll() {
        return `This action returns all user`;
    }

    findOne(id: number) {
        return `This action returns a #${id} user`;
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return `This action updates a #${id} user`;
    }

    remove(id: number) {
        return `This action removes a #${id} user`;
    }
}
