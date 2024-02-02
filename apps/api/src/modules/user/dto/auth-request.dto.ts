import { ApiProperty } from '@nestjs/swagger';
import {
    IsEmail,
    IsNotEmpty,
    IsOptional,
    IsString,
    IsUrl,
    Length,
} from 'class-validator';

export class OpenIdProvider {
    @ApiProperty({
        example: 'opensource@prodexplora.com',
    })
    @IsNotEmpty()
    @IsEmail()
    identifier: string;

    @ApiProperty({
        example: 'GOOGLE / GITHUB',
    })
    @IsNotEmpty()
    @IsString()
    provider: string;
}

export class AuthRequestDto {
    @ApiProperty()
    loginProvider: OpenIdProvider;

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsOptional()
    @Length(6, 20)
    username: string;

    @ApiProperty()
    @IsOptional()
    @IsUrl()
    profilePicture: string;

    @ApiProperty()
    @IsOptional()
    @Length(10, 200)
    bio: string;
}