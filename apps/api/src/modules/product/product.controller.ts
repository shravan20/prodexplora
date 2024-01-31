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
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiTags } from '@nestjs/swagger';
import { HttpExceptionFilter } from 'src/middlewares/global-error.middleware';
import { ApiResponseEnvelope } from 'src/middlewares/decorators/response-envelope.decorator';

@ApiTags('Product API')
@Controller({
    version: '1',
})
@UseFilters(new HttpExceptionFilter())
@ApiResponseEnvelope()
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Post('/products')
    create(@Body() createProductDto: CreateProductDto) {
        return this.productService.create(createProductDto);
    }

    @Get('/products')
    findAll() {
        return this.productService.findAll();
    }

    @Get('/products/:id')
    findOne(@Param('id') id: string) {
        return this.productService.findOne(+id);
    }

    @Patch('/products/:id')
    update(
        @Param('id') id: string,
        @Body() updateProductDto: UpdateProductDto,
    ) {
        return this.productService.update(+id, updateProductDto);
    }

    @Delete('/products/:id')
    remove(@Param('id') id: string) {
        return this.productService.remove(+id);
    }
}
