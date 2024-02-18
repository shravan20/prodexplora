import { Test, TestingModule } from '@nestjs/testing';
import { CommonIntegrationService } from './common-integration.service';

describe('CommonIntegrationService', () => {
    let service: CommonIntegrationService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [CommonIntegrationService]
        }).compile();

        service = module.get<CommonIntegrationService>(
            CommonIntegrationService
        );
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
