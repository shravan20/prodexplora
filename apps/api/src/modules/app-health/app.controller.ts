import {
    Controller,
    Get,
    Post,
    NotFoundException,
    UseFilters,
    Body,
} from '@nestjs/common';
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
import { MyResponseDto } from './dtos/health-response.dto';
import { MyRequestDto } from './dtos/health-request.dto';

@ApiTags('Service Health Check')
@Controller({
    version: '1',
})
@UseFilters(new HttpExceptionFilter())
@ApiResponseEnvelope()
export class AppController {
    constructor(private readonly appService: AppService) { }

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
