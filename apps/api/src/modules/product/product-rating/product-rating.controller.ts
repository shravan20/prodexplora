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
import { CreateProductRatingRequestDto } from './dto/create-request.dto';
import { UpdateProductRatingRequestDto } from './dto/update-request.dto';
import { ProductRatingService } from './product-rating.service';

@ApiTags('Product Rating Service')
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
