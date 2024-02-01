import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsMongoId, IsNotEmpty } from 'class-validator';
import { ProductLaunchStatus } from 'src/enums/product-launch-status.enum';

export class CreateProductUpvoteRequestDto {
    @ApiProperty({
        description: `Status of the Rating (UP_VOTE/DOWN_VOTE)`,
        example: 'UP_VOTE',
    })
    @IsNotEmpty()
    @IsEnum(ProductLaunchStatus)
    status: ProductLaunchStatus;

    @ApiProperty({
        description: `User ID who is voting the product`,
        example: '507f1f77bcf86cd799439012',
    })
    @IsNotEmpty()
    @IsMongoId()
    userId: string;

    @ApiProperty({
        description: `Product ID which is being voted`,
        example: '507f1f77bcf86cd799439011',
    })
    @IsNotEmpty()
    @IsMongoId()
    productId: string;
}
