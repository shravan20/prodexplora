import { PartialType } from '@nestjs/mapped-types';
import { CreateProductUpvoteDto } from './create-product-upvote.dto';

export class UpdateProductUpvoteDto extends PartialType(CreateProductUpvoteDto) {}
