import { Body, Controller, Get, Post, UseFilters } from '@nestjs/common';
import {
    ApiNotFoundResponse,
    ApiResponse,
    ApiTags,
    ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { ApiResponseEnvelope } from 'src/middlewares/decorators/response-envelope.decorator';
import { HttpExceptionFilter } from 'src/middlewares/global-error.middleware';
import { AppService } from './app.service';
import { MyRequestDto } from './dtos/health-request.dto';
import { MyResponseDto } from './dtos/health-response.dto';

@ApiTags('Service Health Check')
@Controller({
    version: '1',
})
@UseFilters(new HttpExceptionFilter())
@ApiResponseEnvelope()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @ApiResponse({
        status: 200,
        description: 'Returns a message indicating its health',
        type: MyResponseDto,
    })
    @ApiNotFoundResponse({ description: 'World not found.' })
    @ApiUnprocessableEntityResponse({
        description: 'World not found.',
    })
    @Get('/health')
    getHello(): { health: string } {
        return {
            health: this.appService.getHello(),
        };
    }

    @ApiResponse({
        status: 200,
        description: 'Returns a message indicating its health with greetings',
        type: MyResponseDto,
    })
    @ApiNotFoundResponse({ description: 'World not found.' })
    @ApiUnprocessableEntityResponse({
        description: 'World not found, with greetings.',
    })
    @Post('/health')
    postHello(@Body() request: MyRequestDto): { health: string } {
        return {
            health: `Hi ${request.name}` + this.appService.getHello(),
        };
    }
}
