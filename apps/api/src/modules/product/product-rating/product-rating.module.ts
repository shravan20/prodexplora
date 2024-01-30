import { Module } from '@nestjs/common';
import { ProductRatingService } from './product-rating.service';
import { ProductRatingController } from './product-rating.controller';

@Module({
    controllers: [ProductRatingController],
    providers: [ProductRatingService],
})
export class ProductRatingModule {}
