import { ApiResponseEnvelope } from '@middlewares/decorators/response-envelope.decorator';
import { HttpExceptionFilter } from '@middlewares/global-error.middleware';
import { Controller, Get, Param, UseFilters } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ObjectIdDto } from '@utils/validations/object-id.validation';
import { CommonIntegrationFactory } from './common-integration.factory';

@ApiTags('Code Hosting Service API')
@Controller({
    version: '1'
})
@UseFilters(new HttpExceptionFilter())
@ApiResponseEnvelope()
export class CommonIntegrationController {
    constructor(private readonly factory: CommonIntegrationFactory) { }

    @Get('/users/:id/services/:service/repos')
    async getRepositoriesByUser(@Param('service') service: string, @Param() { id }: ObjectIdDto) {
        const instance = this.factory.getService(service);
        return await instance.getRepositories();
    }
}
