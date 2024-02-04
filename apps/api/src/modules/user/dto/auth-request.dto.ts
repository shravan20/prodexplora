import { BaseAdaptor } from '@entities/adaptors/base.adaptor';
import { IOpenIdProvider } from '@entities/interfaces/openid-provider.interface';
import { User } from '@entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
    IsEmail,
    IsNotEmpty,
    IsOptional,
    IsString,
    IsUrl,
    Length,
} from 'class-validator';

export class OpenIdProvider extends BaseAdaptor<OpenIdProvider, IOpenIdProvider> {
    @ApiProperty({
        example: 'opensource@prodexplora.com',
    })
    @IsNotEmpty()
    @IsEmail()
    identifier: string;

    @ApiProperty({
        example: 'GOOGLE or GITHUB',
    })
    @IsNotEmpty()
    @IsString()
    provider: string;
}

export class AuthRequestDto extends BaseAdaptor<AuthRequestDto, User> {
    @ApiProperty()
    @Type(() => OpenIdProvider)
    authProvider: OpenIdProvider[];

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
    @IsString()
    firstName: string;

    @ApiProperty()
    @IsString()
    lastName: string;

    @ApiProperty()
    @IsOptional()
    @Length(10, 200)
    bio: string;

}
