import { User } from '@entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';
import { OpenIdProvider } from './auth-request.dto';

export class UserResponseDto {
    @ApiProperty()
    readonly id: string;

    @ApiProperty()
    readonly authProvider: OpenIdProvider[];

    @ApiProperty()
    readonly email: string;

    @ApiProperty()
    readonly username: string;

    @ApiProperty()
    readonly profilePicture: string;

    @ApiProperty()
    readonly firstName: string;

    @ApiProperty()
    readonly lastName: string;

    @ApiProperty()
    readonly bio: string;

    @ApiProperty()
    readonly productFollowing: string[];

    constructor(user: User) {
        this.id = user._id;
        this.email = user.email;
        this.username = user.username;
        this.profilePicture = user.profilePicture;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.bio = user.bio;
        this.authProvider = user.loginProvider;
        this.productFollowing =
            user.productFollowing.length > 0
                ? user.productFollowing.map((v) => v.toString())
                : [];
    }

    static from(user: User): UserResponseDto {
        return new UserResponseDto(user);
    }
}
