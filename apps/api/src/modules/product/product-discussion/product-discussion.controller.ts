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
import { ProductDiscussionService } from './product-discussion.service';
import { CreateProductDiscussionDto } from './dto/create-product-discussion.dto';
import { UpdateProductDiscussionDto } from './dto/update-product-discussion.dto';
import { ApiTags } from '@nestjs/swagger';
import { HttpExceptionFilter } from 'src/middlewares/global-error.middleware';
import { ApiResponseEnvelope } from 'src/middlewares/decorators/response-envelope.decorator';


@ApiTags('Product Discussions Service API')
@Controller({
    version: '1',
})
@UseFilters(new HttpExceptionFilter())
@ApiResponseEnvelope()
export class ProductDiscussionController {
    constructor(
        private readonly productDiscussionService: ProductDiscussionService,
    ) { }

    @Post('/products/:productId/product-discussions/:id')
    create(@Body() createProductDiscussionDto: CreateProductDiscussionDto) {
        return this.productDiscussionService.create(createProductDiscussionDto);
    }

    @Get('/products/:productId/product-discussions')
    findAll() {
        return this.productDiscussionService.findAll();
    }

    @Get('/products/:productId/product-discussions/:id')
    findOne(@Param('id') id: string) {
        return this.productDiscussionService.findOne(+id);
    }

    @Patch('/products/:productId/product-discussions/:id')
    update(
        @Param('id') id: string,
        @Body() updateProductDiscussionDto: UpdateProductDiscussionDto,
    ) {
        return this.productDiscussionService.update(
            +id,
            updateProductDiscussionDto,
        );
    }

    @Delete('/products/:productId/product-discussions/:id')
    remove(@Param('id') id: string) {
        return this.productDiscussionService.remove(+id);
    }
}
