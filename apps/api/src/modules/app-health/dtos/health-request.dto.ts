import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, Length } from 'class-validator';

export class MyRequestDto {
    /*    @ApiProperty({
        description: 'Pass your name as part of the request',
        example: 'Alive or Dead, with greetings xD!',
    }) */
    @IsNotEmpty()
    @Length(3, 10)
    @IsDefined()
    name: string;
}
