import { Test, TestingModule } from '@nestjs/testing';
import { ProductUpvoteService } from './product-upvote.service';

describe('ProductUpvoteService', () => {
    let service: ProductUpvoteService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ProductUpvoteService],
        }).compile();

        service = module.get<ProductUpvoteService>(ProductUpvoteService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
