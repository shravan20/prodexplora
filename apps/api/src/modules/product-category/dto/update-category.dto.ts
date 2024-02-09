import { PartialType } from '@nestjs/mapped-types';
import { CategoryRequestDto } from './category-request.dto';

export class UpdateProductCategoryDto extends PartialType(
    CategoryRequestDto,
) { }
