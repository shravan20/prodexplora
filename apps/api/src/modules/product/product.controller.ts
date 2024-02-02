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
import { CreateProductRequestDto } from './dto/create-request.dto';
import { UpdateProductRequestDto } from './dto/update-request.dto';
import {
    ApiBadRequestResponse,
    ApiNotFoundResponse,
    ApiOkResponse,
    ApiTags,
    ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { HttpExceptionFilter } from 'src/middlewares/global-error.middleware';
import { ApiResponseEnvelope } from 'src/middlewares/decorators/response-envelope.decorator';

@ApiTags('Products Service API')
@Controller({
    version: '1',
})
@UseFilters(new HttpExceptionFilter())
@ApiResponseEnvelope()
export class ProductController {
    constructor(private readonly productService: ProductService) {}

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
