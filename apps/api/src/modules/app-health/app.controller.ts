import { Controller, Get, NotFoundException, UseFilters } from '@nestjs/common';
import { AppService } from './app.service';
import {
    ApiNotFoundResponse,
    ApiUnprocessableEntityResponse,
    ApiProperty,
    ApiTags,
} from '@nestjs/swagger';
import { ApiResponse } from '@nestjs/swagger';
import { HttpExceptionFilter } from 'src/middlewares/global-error.middleware';
import { ApiResponseEnvelope } from 'src/middlewares/decorators/response-envelope.decorator';

class MyResponseDto {
    @ApiProperty({
        description: 'Says if server is alive or not',
        example: 'Alive or Dead xD!',
    })
    data: string;
}

@ApiTags('Service Health Check')
@Controller()
@UseFilters(new HttpExceptionFilter())
@ApiResponseEnvelope()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @ApiResponse({
        status: 200,
        description: 'Returns a message indicating its health',
        type: MyResponseDto,
    })
    @ApiNotFoundResponse({ description: 'Post not found.' })
    @ApiUnprocessableEntityResponse({
        description: 'Post title already exists.',
    })
    @Get('/health')
    getHello(): { health: string } {
        return {
            health: this.appService.getHello(),
        };
    }
}
