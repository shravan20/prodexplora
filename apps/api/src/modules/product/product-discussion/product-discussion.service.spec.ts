import { Test, TestingModule } from '@nestjs/testing';
import { ProductDiscussionService } from './product-discussion.service';

describe('ProductDiscussionService', () => {
    let service: ProductDiscussionService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ProductDiscussionService]
        }).compile();

        service = module.get<ProductDiscussionService>(
            ProductDiscussionService
        );
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
