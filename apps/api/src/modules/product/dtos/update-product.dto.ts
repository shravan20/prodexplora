import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsString } from 'class-validator';
import { ProductRequestDto } from './product-request.dto';

export class UpdateProductRequestDto extends ProductRequestDto {
    @ApiProperty({ required: true })
    @IsString()
    @IsMongoId()
    readonly id: string;
}
