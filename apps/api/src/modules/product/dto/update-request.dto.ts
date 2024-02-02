import { PartialType } from '@nestjs/mapped-types';
import { CreateProductRequestDto } from './create-request.dto';

export class UpdateProductRequestDto extends PartialType(
    CreateProductRequestDto,
) {}
