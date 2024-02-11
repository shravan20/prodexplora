import { PartialType } from '@nestjs/mapped-types';
import * as createRequestDto from './create-request.dto';

export class UpdateProductUpvoteRequestDto extends PartialType(
    createRequestDto.CreateProductUpvoteRequestDto
) {}
