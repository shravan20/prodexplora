import { SecretManagerService } from '@configs/secret-manager.service';
import {
    JWT_EXPIRATION_TIME,
    JWT_REFRESH_EXPIRATION_TIME,
    JWT_REFRESH_SECRET_KEY,
    JWT_SECRET_KEY,
} from '@constants/env-keys.constant';
import { User } from '@entities/user.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import { AuthRequestDto } from './dto/auth-request.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRequestDto } from './dto/user-request.dto';
import { UserResponseDto } from './dto/user-response.dto';
import { UserRequest } from './interface/user-request.interface';
import { UserRepository } from './user.repository';
@Injectable()
export class UserService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly userRepository: UserRepository,
        private configService: SecretManagerService,
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
            algorithm: 'HS256',
            secret: this.configService.getSecret(JWT_SECRET_KEY),
        };

        const accessToken = await this.generateJwtToken(payload, {
            ...options,
            expiresIn: this.configService.getSecret(JWT_EXPIRATION_TIME),
        });

        const refreshToken = await this.generateJwtToken(payload, {
            ...options,
            expiresIn: this.configService.getSecret(
                JWT_REFRESH_EXPIRATION_TIME,
            ),
            secret: this.configService.getSecret(JWT_REFRESH_SECRET_KEY),
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
        createUserDto: UserRequestDto,
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

    private async create(createUserDto: UserRequestDto) {
        return await this.userRepository.create(createUserDto);
    }

    findAll() {
        return `This action returns all user`;
    }

    async getById(id: string): Promise<UserResponseDto> {
        const user = await this.userRepository.findById(id);
        if (!user) {
            throw new NotFoundException(`Resource with id=${id} not found`);
        }
        return UserResponseDto.from(user);
    }

    update(id: string, updateUserDto: UpdateUserDto) {
        return `This action updates a #${id} user`;
    }

    remove(id: string) {
        return `This action removes a #${id} user`;
    }
}
