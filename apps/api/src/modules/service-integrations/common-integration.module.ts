import { Module } from '@nestjs/common';
import { CommonIntegrationController } from './common-integration.controller';
import { CommonIntegrationFactory } from './common-integration.factory';
import { GitHubService } from './github-service.service';

const services = [GitHubService];

@Module({
    providers: [CommonIntegrationFactory, ...services],
    exports: [CommonIntegrationFactory, ...services],
    controllers: [CommonIntegrationController],
})
export class CommonIntegrationModule {}
