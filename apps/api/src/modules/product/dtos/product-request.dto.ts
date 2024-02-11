import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
    ArrayMaxSize,
    IsArray,
    IsBoolean,
    IsEnum,
    IsMongoId,
    IsOptional,
    IsString,
    IsUrl,
    ValidateNested
} from 'class-validator';
import { ProductLaunchStatus } from 'src/enums/product-launch-status.enum';

export class ExternalLinkDto {
    @ApiProperty({
        example: 'facebook',
        required: true
    })
    @IsString()
    readonly platform: string;

    @ApiProperty({
        example: 'www.fb.com/prodexplora',
        required: true
    })
    @IsString()
    @IsUrl()
    readonly link: string;
}

export class ProductRequestDto {
    @ApiProperty({ required: true })
    @IsString()
    readonly title: string;

    @ApiProperty({ required: true })
    @IsString()
    readonly description: string;

    @ApiProperty({ required: true })
    @IsString()
    readonly slug: string;

    @ApiProperty()
    @IsArray()
    @Type(() => String)
    @ArrayMaxSize(5)
    @IsMongoId({ each: true })
    readonly categories: string[] = [];

    @ApiProperty()
    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    readonly technologies: string[] = [];

    @ApiProperty()
    @IsString()
    @IsMongoId()
    readonly createdBy: string;

    @ApiProperty()
    @IsEnum(ProductLaunchStatus)
    readonly status: ProductLaunchStatus;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    readonly isPublished?: boolean = false;

    @ApiProperty({ type: [ExternalLinkDto], required: false })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ExternalLinkDto)
    @IsOptional()
    readonly externalLinks: ExternalLinkDto[];
}
