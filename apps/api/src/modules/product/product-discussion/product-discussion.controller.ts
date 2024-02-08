import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    UseFilters,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApiResponseEnvelope } from 'src/middlewares/decorators/response-envelope.decorator';
import { HttpExceptionFilter } from 'src/middlewares/global-error.middleware';
import { CreateProductDiscussionDto } from './dto/create-request.dto';
import { UpdateProductDiscussionDto } from './dto/update-request.dto';
import { ProductDiscussionService } from './product-discussion.service';

@ApiTags('Product Discussion Service')
@Controller({
    version: '1',
})
@UseFilters(new HttpExceptionFilter())
@ApiResponseEnvelope()
export class ProductDiscussionController {
    constructor(
        private readonly productDiscussionService: ProductDiscussionService,
    ) {}

    @Post('/products/:productId/product-discussions')
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
