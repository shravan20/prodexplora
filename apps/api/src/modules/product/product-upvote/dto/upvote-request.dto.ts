import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsMongoId, IsNotEmpty } from 'class-validator';
import { ProductUpvoteStatus } from 'src/enums/product-upvote-status.enum';

export class ProductUpvoteRequestDto {
    @ApiProperty({
        description: `Status of the Rating (UP_VOTE/DOWN_VOTE)`,
        example: 'UP_VOTE'
    })
    @IsNotEmpty()
    @IsEnum(ProductUpvoteStatus)
    status: ProductUpvoteStatus;

    @ApiProperty({
        description: `User ID who is voting the product`,
        example: '507f1f77bcf86cd799439012'
    })
    @IsNotEmpty()
    @IsMongoId()
    userId: string;

    @ApiProperty({
        description: `Product ID`,
        example: '507f1f77bcf86cd799439013'
    })
    @IsNotEmpty()
    @IsMongoId()
    productId: string;
}
