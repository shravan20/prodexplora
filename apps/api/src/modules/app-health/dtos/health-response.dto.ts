import { ApiProperty } from '@nestjs/swagger';

export class MyResponseDto {
    @ApiProperty({
        description: 'Says if server is alive or not',
        example: 'Alive or Dead xD!',
    })
    status: string;
}
