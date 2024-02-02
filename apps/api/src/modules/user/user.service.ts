import { User } from '@entities/user.entity';
import { Injectable } from '@nestjs/common';
import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import { AuthRequestDto } from './dto/auth-request.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRequest } from './interface/user-request.interface';
import { UserRepository } from './user.repository';
@Injectable()
export class UserService {
    constructor(private readonly jwtService: JwtService, private readonly userRepository: UserRepository) { }

    async signIn(createAuthDto: AuthRequestDto) {

        let data = await this.create(createAuthDto);
        let user: User = data.user;

        let payload = {
            'uid': user._id,
            'email': user.email
        };

        /**
         * TODO: Make it all env configured and move it all the jwt.service/util
         */
        let options: JwtSignOptions = {
            expiresIn: '60s',
            algorithm: 'HS256',
            header: { alg: 'HS256', typ: 'JWT' },
            encoding: 'base64',
            secret: process.env.JWT_SECRET
        };

        let accessToken = await this.jwtService.sign(payload, options);

        options.expiresIn = '120s';

        let refreshToken = await this.jwtService.sign(payload, options);

        return {
            'accessToken': accessToken,
            'refreshToken': refreshToken,
            'user': user
        };

    }

    async create(createUserDto: CreateUserDto): Promise<UserRequest> {

        let emailQuery = {
            email: createUserDto.email,
        };

        let user: User = await this.userRepository.findOne(emailQuery);

        if (user) {

            return {
                user,
                'existingUser': true
            };
        }
        user = await this.userRepository.create(createUserDto);

        return {
            user,
            'existingUser': false
        }
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
