import { PartialType } from '@nestjs/mapped-types';
import * as createRequestDto from './upvote-request.dto';

export class UpdateProductUpvoteRequestDto extends PartialType(
    createRequestDto.ProductUpvoteRequestDto
) {}
