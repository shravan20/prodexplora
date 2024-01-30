import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductUpvoteModule } from './product-upvote/product-upvote.module';
import { ProductRatingModule } from './product-rating/product-rating.module';
import { ProductDiscussionModule } from './product-discussion/product-discussion.module';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  imports: [ProductUpvoteModule, ProductRatingModule, ProductDiscussionModule],
})
export class ProductModule {}
