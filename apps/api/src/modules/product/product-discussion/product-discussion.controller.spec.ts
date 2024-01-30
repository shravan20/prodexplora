import { Test, TestingModule } from '@nestjs/testing';
import { ProductDiscussionController } from './product-discussion.controller';
import { ProductDiscussionService } from './product-discussion.service';

describe('ProductDiscussionController', () => {
  let controller: ProductDiscussionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductDiscussionController],
      providers: [ProductDiscussionService],
    }).compile();

    controller = module.get<ProductDiscussionController>(ProductDiscussionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
