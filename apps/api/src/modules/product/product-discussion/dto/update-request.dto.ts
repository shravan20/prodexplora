import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDiscussionDto } from './create-request.dto';

export class UpdateProductDiscussionDto extends PartialType(
    CreateProductDiscussionDto
) {}
