import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseFilters,
} from '@nestjs/common';
import { ProductUpvoteService } from './product-upvote.service';
import { CreateProductUpvoteDto } from './dto/create-product-upvote.dto';
import { UpdateProductUpvoteDto } from './dto/update-product-upvote.dto';
import { HttpExceptionFilter } from 'src/middlewares/global-error.middleware';
import { ApiTags } from '@nestjs/swagger';
import { ApiResponseEnvelope } from 'src/middlewares/decorators/response-envelope.decorator';


@ApiTags('Product Upvotes Service API')
@Controller({
    version: '1',
})
@UseFilters(new HttpExceptionFilter())
@ApiResponseEnvelope()
export class ProductUpvoteController {
    constructor(private readonly productUpvoteService: ProductUpvoteService) { }

    @Post('/product/:productId/product-upvotes/:id')
    create(@Body() createProductUpvoteDto: CreateProductUpvoteDto) {
        return this.productUpvoteService.create(createProductUpvoteDto);
    }

    @Get('/product/:productId/product-upvotes')
    findAll() {
        return this.productUpvoteService.findAll();
    }

    @Get('/product/:productId/product-upvotes/:id')
    findOne(@Param('id') id: string) {
        return this.productUpvoteService.findOne(+id);
    }

    @Patch('/product/:productId/product-upvotes/:id')
    update(
        @Param('id') id: string,
        @Body() updateProductUpvoteDto: UpdateProductUpvoteDto,
    ) {
        return this.productUpvoteService.update(+id, updateProductUpvoteDto);
    }

    @Delete('/product/:productId/product-upvotes/:id')
    remove(@Param('id') id: string) {
        return this.productUpvoteService.remove(+id);
    }
}
