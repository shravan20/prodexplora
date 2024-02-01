import { PartialType } from '@nestjs/mapped-types';
import { CreateProductRequestDto } from './create-product.dto';

export class UpdateProductRequestDto extends PartialType(
    CreateProductRequestDto,
) {}
