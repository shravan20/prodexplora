import { ApiResponseEnvelope } from '@middlewares/decorators/response-envelope.decorator';
import { HttpExceptionFilter } from '@middlewares/global-error.middleware';
import { Controller, Get, UseFilters } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CommonIntegrationFactory } from './common-integration.factory';

@ApiTags('Code Hosting Service API')
@Controller({
    version: '1'
})
@UseFilters(new HttpExceptionFilter())
@ApiResponseEnvelope()
export class CommonIntegrationController {
    constructor(private readonly factory: CommonIntegrationFactory) {}

    @Get('/service')
    async get() {
        const instance = this.factory.getService('github');
        return await instance.get();
    }
}