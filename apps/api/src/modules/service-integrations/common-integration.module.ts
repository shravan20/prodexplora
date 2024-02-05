import { Module } from '@nestjs/common';
import { CommonIntegrationFactory } from './common-integration.factory';
import { GitHubService } from './github-service.service';

const servicesMap = {
    github: GitHubService,
};

@Module({
    imports: [],
    controllers: [],
    providers: [
        ...Object.values(servicesMap),
        CommonIntegrationFactory,
        {
            useFactory: (factory: CommonIntegrationFactory) => {
                const platform = process.env.CODE_HOSTING_PLATFORM || 'github';
                const service = factory.getService(platform);
                return new servicesMap[platform](service);
            },
            inject: [IServiceIntegration],
        },
    ],
    exports: [CommonIntegrationFactory],
})
export class CommonIntegrationModule {}
