import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';

/**
 *  Note: Extend this class with every DTO class that needs id in body/param/query
 * **/
export class ObjectIdDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @IsMongoId({ message: 'id must be a hexa-string' })
    id: string;
}
