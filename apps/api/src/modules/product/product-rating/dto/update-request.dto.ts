import { PartialType } from '@nestjs/mapped-types';
import { CreateProductRatingRequestDto } from './create-request.dto';

export class UpdateProductRatingRequestDto extends PartialType(
    CreateProductRatingRequestDto
) {}
