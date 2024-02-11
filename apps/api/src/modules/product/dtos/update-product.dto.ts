import { PartialType } from '@nestjs/mapped-types';
import { ProductRequestDto } from './product-request.dto';

export class UpdateProductRequestDto extends PartialType(ProductRequestDto) {}
