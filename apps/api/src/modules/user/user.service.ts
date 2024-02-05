import { JWT_EXPIRATION_TIME, JWT_REFRESH_EXPIRATION_TIME, JWT_REFRESH_SECRET_KEY, JWT_SECRET_KEY } from '@constants/env-keys.constant';
import { User } from '@entities/user.entity';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
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
        private configService: ConfigService,
    ) { }


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
            algorithm: 'HS256',
            secret: this.configService.get(JWT_SECRET_KEY),
        };

        const accessToken = await this.generateJwtToken(payload, {
            ...options,
            expiresIn: this.configService.get(JWT_EXPIRATION_TIME),
        });

        const refreshToken = await this.generateJwtToken(payload, {
            ...options,
            expiresIn: this.configService.get(JWT_REFRESH_EXPIRATION_TIME),
            secret: this.configService.get(JWT_REFRESH_SECRET_KEY),
        });

        return {
            accessToken: accessToken,
            refreshToken: refreshToken,
            user: user,
        };
    }

    private async generateJwtToken(
        payload: { uid: any; email: string },
        options: JwtSignOptions,
    ) {
        return await this.jwtService.sign(payload, options);
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

        let user: User = await this.userRepository.findOneAndUpdate(
            emailQuery,
            update,
        );

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
