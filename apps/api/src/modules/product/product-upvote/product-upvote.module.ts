import {
    ProductUpvote,
    ProductUpvoteSchema
} from '@entities/product-upvote.entity';
import { UserModule } from '@modules/user/user.module';
import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from '../product.module';
import { ProductUpvoteController } from './product-upvote.controller';
import { ProductUpvoteRepository } from './product-upvote.repository';
import { ProductUpvoteService } from './product-upvote.service';

@Module({
    controllers: [ProductUpvoteController],
    providers: [ProductUpvoteService, ProductUpvoteRepository],
    imports: [
        MongooseModule.forFeature([
            { name: ProductUpvote.name, schema: ProductUpvoteSchema }
        ]),
        forwardRef(() => ProductModule),
        UserModule
    ]
})
export class ProductUpvoteModule {}
