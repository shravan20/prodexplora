import { Module } from '@nestjs/common';
import { ProductUpvoteService } from './product-upvote.service';
import { ProductUpvoteController } from './product-upvote.controller';

@Module({
    controllers: [ProductUpvoteController],
    providers: [ProductUpvoteService]
})
export class ProductUpvoteModule {}
