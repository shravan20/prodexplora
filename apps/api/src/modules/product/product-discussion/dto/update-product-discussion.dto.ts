import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDiscussionDto } from './create-product-discussion.dto';

export class UpdateProductDiscussionDto extends PartialType(CreateProductDiscussionDto) {}
