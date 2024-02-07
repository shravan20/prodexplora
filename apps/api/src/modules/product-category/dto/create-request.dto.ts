import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateProductCategoryRequestDto {
    @ApiProperty({
        description: `Category Name under which a Product comes into`,
        example: 'Developer tools',
    })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({
        description: `Description of the product category`,
        example:
            'Developer tools is category which takes in dev friendly/productivity tools',
    })
    @IsNotEmpty()
    @IsString()
    description: string;

    @ApiProperty({
        description: `URL component that designates a particular section`,
        example:
            'category/developer-tools',
    })
    @IsOptional()
    @IsString()
    slug: string;
}
