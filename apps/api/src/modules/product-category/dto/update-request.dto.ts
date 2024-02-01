import { PartialType } from '@nestjs/mapped-types';
import { CreateProductCategoryRequestDto } from './create-request.dto';

export class UpdateProductCategoryDto extends PartialType(
    CreateProductCategoryRequestDto,
) { }
