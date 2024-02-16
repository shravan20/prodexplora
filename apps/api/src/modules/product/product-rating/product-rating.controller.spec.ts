import { Test, TestingModule } from '@nestjs/testing';
import { ProductRatingController } from './product-rating.controller';
import { ProductRatingService } from './product-rating.service';

describe('ProductRatingController', () => {
    let controller: ProductRatingController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ProductRatingController],
            providers: [ProductRatingService]
        }).compile();

        controller = module.get<ProductRatingController>(
            ProductRatingController
        );
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
