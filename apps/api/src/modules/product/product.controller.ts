import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    UseFilters
} from '@nestjs/common';
import {
    ApiBadRequestResponse,
    ApiBody,
    ApiNotFoundResponse,
    ApiOkResponse,
    ApiTags,
    ApiUnprocessableEntityResponse
} from '@nestjs/swagger';
import { ObjectIdDto } from '@utils/validations/object-id.validation';
import { ApiResponseEnvelope } from 'src/middlewares/decorators/response-envelope.decorator';
import { HttpExceptionFilter } from 'src/middlewares/global-error.middleware';
import { ProductRequestDto } from './dtos/product-request.dto';
import { ProductResponseDto } from './dtos/product-response.dto';
import { UpdateProductRequestDto } from './dtos/update-product.dto';
import { ProductService } from './product.service';

@ApiTags('Product Service')
@Controller({
    version: '1'
})
@UseFilters(new HttpExceptionFilter())
@ApiResponseEnvelope()
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Post('/products')
    @ApiOkResponse({
        type: ProductRequestDto
    })
    @ApiNotFoundResponse({
        description: 'API path not found/invalid'
    })
    @ApiUnprocessableEntityResponse({
        description: 'Product cannot be created.'
    })
    @ApiBadRequestResponse({
        description: 'Bad Request due to validation error.'
    })
    @ApiBody({ type: ProductRequestDto })
    async create(
        @Body() createProductDto: ProductRequestDto
    ): Promise<ProductResponseDto> {
        return this.productService.create(createProductDto);
    }

    @ApiOkResponse({
        type: [ProductRequestDto]
    })
    @ApiNotFoundResponse({
        description: 'API path not found/invalid'
    })
    @ApiUnprocessableEntityResponse({
        description: 'Product cannot be created.'
    })
    @ApiBadRequestResponse({
        description: 'Bad Request due to validation error.'
    })
    @Get('/products')
    async findAll(): Promise<ProductRequestDto[]> {
        return await this.productService.findAll();
    }

    @Get('/products/:id')
    async findOne(@Param() { id }: ObjectIdDto): Promise<ProductRequestDto> {
        return await this.productService.findById(id);
    }

    @Patch('/products/:id')
    update(
        @Param() { id }: ObjectIdDto,
        @Body() updateProductDto: UpdateProductRequestDto
    ): UpdateProductRequestDto {
        this.productService.update(id, updateProductDto);
        return {};
    }

    @Delete('/products/:id')
    remove(@Param() { id }: ObjectIdDto): ProductRequestDto {
        this.productService.remove(id);
        return new ProductRequestDto();
    }
}
