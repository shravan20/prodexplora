import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryRequestDto } from './category-request.dto';

export class UpdateProductCategoryDto extends PartialType(
    CreateCategoryRequestDto,
) { }
