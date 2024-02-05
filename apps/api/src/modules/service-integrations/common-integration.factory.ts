
import { Injectable } from '@nestjs/common';
import { GitHubService } from './github-service.service';
import { IServiceIntegration } from './interfaces/common-integration.interface';


@Injectable()
export class CommonIntegrationFactory {
    getService(platform: string): IServiceIntegration {
        switch (platform.toUpperCase()) {
            case 'GITHUB':
                return new GitHubService();
            default:
                throw new Error(`Unsupported platform: ${platform}`);
        }
    }
}
