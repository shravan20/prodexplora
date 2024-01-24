import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';
import { ApiResponse } from '@nestjs/swagger';
@ApiTags('Service Health Check')
@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @ApiResponse({ status: 200, description: 'Returns a welcome message' })
    @Get('health')
    getHello(): string {
        return this.appService.getHello();
    }
}
