import { Controller, Get, Post, UseFilters, Body } from '@nestjs/common';
import { AppService } from './app.service';
import {
    ApiNotFoundResponse,
    ApiUnprocessableEntityResponse,
    ApiTags,
    ApiResponse,
    ApiOkResponse,
} from '@nestjs/swagger';
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
    constructor(private readonly appService: AppService) {}

    // @ApiOkResponse()
    @ApiNotFoundResponse({ description: 'World not found.' })
    @ApiUnprocessableEntityResponse({ description: 'World not found.' })
    @Get('/health')
    getHello(): MyResponseDto {
        return {
            status: this.appService.getHello(),
        };
    }

    /*  @ApiResponse({
         status: 200,
         description: 'Returns a message indicating its health with greetings',
         type: MyResponseDto,
     }) */
    @ApiNotFoundResponse({ description: 'World not found.' })
    @ApiUnprocessableEntityResponse({
        description: 'World not found, with greetings.',
    })
    @Post('/health')
    postHello(@Body() request: MyRequestDto): MyResponseDto {
        return {
            status: `Hi ${request.name}` + this.appService.getHello(),
        };
    }
}
