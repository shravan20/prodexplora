import { ApiProperty } from '@nestjs/swagger';

export class ResponseBody<T> {
    @ApiProperty()
    status: boolean;

    @ApiProperty()
    statusCode: number;

    @ApiProperty()
    payload: T | T[] | null;

    @ApiProperty()
    message: string[];

    @ApiProperty()
    timestamp: string;

    @ApiProperty()
    endpoint: string;
}
