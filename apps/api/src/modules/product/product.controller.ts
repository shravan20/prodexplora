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
import { CreateProductRequestDto } from './dto/create-request.dto';
import { UpdateProductRequestDto } from './dto/update-request.dto';
import { ProductService } from './product.service';

@ApiTags('Product Service')
@Controller({
    version: '1',
})
@UseFilters(new HttpExceptionFilter())
@ApiResponseEnvelope()
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @ApiOkResponse({
        type: CreateProductRequestDto,
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
    create(
        @Body() createProductDto: CreateProductRequestDto,
    ): CreateProductRequestDto {
        this.productService.create(createProductDto);
        return new CreateProductRequestDto();
    }

    @ApiOkResponse({
        type: [CreateProductRequestDto],
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
    findAll(): CreateProductRequestDto[] {
        this.productService.findAll();
        return [];
    }

    @Get('/products/:id')
    findOne(@Param('id') id: string): CreateProductRequestDto {
        this.productService.findOne(+id);
        return new CreateProductRequestDto();
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
    remove(@Param('id') id: string): CreateProductRequestDto {
        this.productService.remove(+id);
        return new CreateProductRequestDto();
    }
}
