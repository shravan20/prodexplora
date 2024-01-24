import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { ApiResponse } from '@nestjs/swagger';

class MyResponseDto {
    @ApiProperty({ description: 'Says if server is alive or not', example: 'Alive or Dead xD!' })
    data: string;
}

@ApiTags('Service Health Check')
@Controller()
export class AppController {
    constructor(private readonly appService: AppService) { }

    @ApiResponse({ status: 200, description: 'Returns a message indicating its health', type: MyResponseDto })
    @Get('health')
    getHello(): { data: string } {
        return {
            data: this.appService.getHello()
        };
    }
}



