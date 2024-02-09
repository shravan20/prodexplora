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
import {
    ApiBadRequestResponse,
    ApiNotFoundResponse,
    ApiOkResponse,
    ApiTags,
    ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { ApiResponseEnvelope } from 'src/middlewares/decorators/response-envelope.decorator';
import { HttpExceptionFilter } from 'src/middlewares/global-error.middleware';
import { ProductRequestDto } from './dto/product-request.dto';
import { UpdateProductRequestDto } from './dto/update-product.dto';
import { ProductService } from './product.service';

@ApiTags('Product Service')
@Controller({
    version: '1',
})
@UseFilters(new HttpExceptionFilter())
@ApiResponseEnvelope()
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @ApiOkResponse({
        type: ProductRequestDto,
    })
    @ApiNotFoundResponse({
        description: 'API path not found/invalid',
    })
    @ApiUnprocessableEntityResponse({
        description: 'Product cannot be created.',
    })
    @ApiBadRequestResponse({
        description: 'Bad Request due to validation error.',
    })
    @Post('/products')
    create(@Body() createProductDto: ProductRequestDto): ProductRequestDto {
        this.productService.create(createProductDto);
        return new ProductRequestDto();
    }

    @ApiOkResponse({
        type: [ProductRequestDto],
    })
    @ApiNotFoundResponse({
        description: 'API path not found/invalid',
    })
    @ApiUnprocessableEntityResponse({
        description: 'Product cannot be created.',
    })
    @ApiBadRequestResponse({
        description: 'Bad Request due to validation error.',
    })
    @Get('/products')
    findAll(): ProductRequestDto[] {
        this.productService.findAll();
        return [];
    }

    @Get('/products/:id')
    findOne(@Param('id') id: string): ProductRequestDto {
        this.productService.findOne(+id);
        return new ProductRequestDto();
    }

    @Patch('/products/:id')
    update(
        @Param('id') id: string,
        @Body() updateProductDto: UpdateProductRequestDto,
    ): UpdateProductRequestDto {
        this.productService.update(+id, updateProductDto);
        return {};
    }

    @Delete('/products/:id')
    remove(@Param('id') id: string): ProductRequestDto {
        this.productService.remove(+id);
        return new ProductRequestDto();
    }
}
