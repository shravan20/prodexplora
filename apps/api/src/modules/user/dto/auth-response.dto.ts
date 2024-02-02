import { PartialType } from '@nestjs/mapped-types';
import { AuthRequestDto } from './auth-request.dto';

export class UpdateAuthDto extends PartialType(AuthRequestDto) {}
