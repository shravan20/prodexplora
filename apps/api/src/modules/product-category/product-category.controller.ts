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
import { ProductCategoryService } from './product-category.service';
import { CreateProductCategoryDto } from './dto/create-product-category.dto';
import { UpdateProductCategoryDto } from './dto/update-product-category.dto';
import { ApiTags } from '@nestjs/swagger';
import { HttpExceptionFilter } from 'src/middlewares/global-error.middleware';
import { ApiResponseEnvelope } from 'src/middlewares/decorators/response-envelope.decorator';

@ApiTags('Categories Service API')
@Controller({
    version: '1',
})
@UseFilters(new HttpExceptionFilter())
@ApiResponseEnvelope()
export class ProductCategoryController {
    constructor(
        private readonly productCategoryService: ProductCategoryService,
    ) {}

    @Post('/products/:productId/product-categories/:id')
    create(@Body() createProductCategoryDto: CreateProductCategoryDto) {
        return this.productCategoryService.create(createProductCategoryDto);
    }

    @Get('/products/:productId/product-categories/:id')
    findAll() {
        return this.productCategoryService.findAll();
    }

    @Get('/products/:productId/product-categories/:id')
    findOne(@Param('id') id: string) {
        return this.productCategoryService.findOne(+id);
    }

    @Patch('/products/:productId/product-categories/:id')
    update(
        @Param('id') id: string,
        @Body() updateProductCategoryDto: UpdateProductCategoryDto,
    ) {
        return this.productCategoryService.update(
            +id,
            updateProductCategoryDto,
        );
    }

    @Delete('/products/:productId/product-categories/:id')
    remove(@Param('id') id: string) {
        return this.productCategoryService.remove(+id);
    }
}
