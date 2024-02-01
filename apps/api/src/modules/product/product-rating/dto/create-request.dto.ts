import { ApiProperty } from '@nestjs/swagger';
import {
    IsInt,
    IsMongoId,
    IsNotEmpty,
    IsNumber,
    Max,
    Min,
} from 'class-validator';

export class CreateProductRatingRequestDto {
    @ApiProperty({
        description: 'User ID who is rating the product',
        example: '507f1f77bcf86cd799439011',
    })
    @IsNotEmpty()
    @IsMongoId()
    userId: string;

    @ApiProperty({
        description: 'Product ID who is rating the product',
        example: '507f1f77bcf86cd799439011',
    })
    @IsNotEmpty()
    @IsMongoId()
    productId: string;

    @ApiProperty({
        description: 'Rating for the product from 1 to 5',
        example: '4',
    })
    @IsNotEmpty()
    @IsNumber(
        {
            allowNaN: false,
            allowInfinity: false,
            maxDecimalPlaces: 2,
        },
        {
            message: 'Rating must be a number with at most 2 decimal places',
        },
    )
    @Min(1, { message: 'Rating must be at least 1' })
    @Max(10, { message: 'Rating must be at most 5' })
    rating: number;
}
