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
import { ProductRatingService } from './product-rating.service';
import { CreateProductRatingRequestDto } from './dto/create-request.dto';
import { UpdateProductRatingRequestDto } from './dto/update-request.dto';
import { ApiTags } from '@nestjs/swagger';
import { HttpExceptionFilter } from 'src/middlewares/global-error.middleware';
import { ApiResponseEnvelope } from 'src/middlewares/decorators/response-envelope.decorator';

@ApiTags('Product Ratings Service API')
@Controller({
    version: '1',
})
@UseFilters(new HttpExceptionFilter())
@ApiResponseEnvelope()
export class ProductRatingController {
    constructor(private readonly productRatingService: ProductRatingService) { }

    @Post('/products/:productId/product-ratings')
    create(@Body() createProductRatingDto: CreateProductRatingRequestDto) {
        return this.productRatingService.create(createProductRatingDto);
    }

    @Get('/products/:productId/product-ratings')
    findAll() {
        return this.productRatingService.findAll();
    }

    @Get('/products/:productId/product-ratings/:id')
    findOne(@Param('id') id: string) {
        return this.productRatingService.findOne(+id);
    }

    @Patch('/products/:productId/product-ratings/:id')
    update(
        @Param('id') id: string,
        @Body() updateProductRatingDto: UpdateProductRatingRequestDto,
    ) {
        return this.productRatingService.update(+id, updateProductRatingDto);
    }

    @Delete('/products/:productId/product-ratings/:id')
    remove(@Param('id') id: string) {
        return this.productRatingService.remove(+id);
    }
}
