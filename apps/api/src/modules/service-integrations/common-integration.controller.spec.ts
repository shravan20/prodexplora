import { Test, TestingModule } from '@nestjs/testing';
import { CommonIntegrationController } from './common-integration.controller';

describe('CommonIntegrationController', () => {
    let controller: CommonIntegrationController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [CommonIntegrationController],
        }).compile();

        controller = module.get<CommonIntegrationController>(
            CommonIntegrationController,
        );
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
