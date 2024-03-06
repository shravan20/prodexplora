import { Injectable, UnsupportedMediaTypeException } from '@nestjs/common';
import { GitHubService } from '../github.service';
import IServiceIntegration from './interfaces/common-integration.interface';

@Injectable()
export class CommonIntegrationFactory {
    getService(platform: string): IServiceIntegration {
        switch (platform.toUpperCase()) {
            case 'GITHUB':
                return new GitHubService();
            default:
                throw new UnsupportedMediaTypeException(
                    `Unsupported platform: ${platform}`
                );
        }
    }
}
