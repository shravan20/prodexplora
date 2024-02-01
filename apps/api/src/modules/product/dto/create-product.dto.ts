import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
    IsArray,
    IsBoolean,
    IsEnum,
    IsOptional,
    IsString,
    ValidateNested,
} from 'class-validator';
import { ProductLaunchStatus } from 'src/enums/product-launch-status.enum';

export class ExternalLinkDto {
    @ApiProperty({
        example: 'facebook',
    })
    @IsString()
    platform: string;

    @ApiProperty({
        example: 'www.fb.com/prodexplora',
    })
    @IsString()
    link: string;
}

export class CreateProductRequestDto {
    @ApiProperty()
    @IsString()
    title: string;

    @ApiProperty()
    @IsString()
    description: string;

    @ApiProperty()
    @IsArray()
    @Type(() => String)
    categories: string[];

    @ApiProperty()
    @IsArray()
    @IsString({ each: true })
    technologies: string[];

    @ApiProperty()
    @IsString()
    userId: string;

    @ApiProperty()
    @IsEnum(ProductLaunchStatus)
    status: ProductLaunchStatus;

    @ApiProperty({ enum: ProductLaunchStatus })
    @IsBoolean()
    @IsOptional()
    isPublish?: boolean;

    @ApiProperty({ type: [ExternalLinkDto] })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ExternalLinkDto)
    externalLinks: ExternalLinkDto[];
}
