import { ApiProperty } from "@nestjs/swagger";
import { IsMongoId, IsNotEmpty, IsString, Length } from "class-validator";

export class CreateProductDiscussionDto {

    @ApiProperty({
        description: `Commentator's ID`,
        example: '507f1f77bcf86cd799439011',
    })
    @IsNotEmpty()
    @IsMongoId()
    userId: string;

    @ApiProperty({
        description: `Product ID on which comment is shared upon`,
        example: '678f77bcf86cd799439011',
    })
    @IsNotEmpty()
    @IsMongoId()
    productId: string;

    @ApiProperty({
        description: `Comment on the product/reply to existing comments`,
        example: 'Hey, the product is amazing!!',
    })
    @IsNotEmpty()
    @IsString()
    @Length(10, 500)
    content: string;

    @ApiProperty({
        description: `Discussion ID to which comment it is a reply to`,
        example: '670f77bcf86cd799439011',
    })
    @IsMongoId()
    replyTo?: string;
}
