import { Test, TestingModule } from '@nestjs/testing';
import { ProductUpvoteController } from './product-upvote.controller';
import { ProductUpvoteService } from './product-upvote.service';

describe('ProductUpvoteController', () => {
  let controller: ProductUpvoteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductUpvoteController],
      providers: [ProductUpvoteService],
    }).compile();

    controller = module.get<ProductUpvoteController>(ProductUpvoteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
