import { Module } from '@nestjs/common';
import { ProductDiscussionService } from './product-discussion.service';
import { ProductDiscussionController } from './product-discussion.controller';

@Module({
    controllers: [ProductDiscussionController],
    providers: [ProductDiscussionService]
})
export class ProductDiscussionModule {}
