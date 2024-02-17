import { Module } from '@nestjs/common';
import { GitHubService } from '../github.service';
import { CommonIntegrationController } from './common-integration.controller';
import { CommonIntegrationFactory } from './common-integration.factory';

const services = [GitHubService];

@Module({
    providers: [CommonIntegrationFactory, ...services],
    exports: [CommonIntegrationFactory, ...services],
    controllers: [CommonIntegrationController]
})
export class CommonIntegrationModule {}
