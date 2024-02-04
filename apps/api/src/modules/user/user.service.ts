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
    constructor(
        private readonly jwtService: JwtService,
        private readonly userRepository: UserRepository,
    ) {}

    async signIn(createAuthDto: AuthRequestDto) {
        const data = await this.createIfNotExists(createAuthDto);

        const user: User = data.user;

        const payload = {
            uid: user._id,
            email: user.email,
        };

        /**
         * TODO: Make it all env configured and move it all the jwt.service/util
         */
        const options: JwtSignOptions = {
            expiresIn: '60s',
            algorithm: 'HS256',
            header: { alg: 'HS256', typ: 'JWT' },
            encoding: 'base64',
            secret: process.env.JWT_SECRET_KEY,
        };

        const accessToken = await this.jwtService.sign(payload, options);

        options.expiresIn = '120s';

        const refreshToken = await this.jwtService.sign(payload, options);

        return {
            accessToken: accessToken,
            refreshToken: refreshToken,
            user: user,
        };
    }

    async createIfNotExists(
        createUserDto: CreateUserDto,
    ): Promise<UserRequest> {
        const emailQuery = {
            email: createUserDto.email,
        };

        const update = {
            $addToSet: {
                loginProvider: createUserDto.authProvider[0],
            },
        };
        console.log(emailQuery, update);
        let user: User = await this.userRepository.findOneAndUpdate(
            emailQuery,
            update,
        );
        console.log(user);

        if (user) {
            return {
                user,
                previouslyRegistered: true,
            };
        }
        user = await this.create(createUserDto);

        return {
            user,
            previouslyRegistered: false,
        };
    }

    private async create(createUserDto: CreateUserDto) {
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
