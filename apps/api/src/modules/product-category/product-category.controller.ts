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
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { ObjectIdDto } from '@utils/validations/object-id.validation';
import { ApiResponseEnvelope } from 'src/middlewares/decorators/response-envelope.decorator';
import { HttpExceptionFilter } from 'src/middlewares/global-error.middleware';
import { CategoryRequestDto } from './dto/category-request.dto';
import { UpdateProductCategoryDto } from './dto/update-category.dto';
import { ProductCategoryService } from './product-category.service';

@ApiTags('Categories Service')
@Controller({
    version: '1'
})
@UseFilters(new HttpExceptionFilter())
@ApiResponseEnvelope()
export class ProductCategoryController {
    constructor(
        private readonly productCategoryService: ProductCategoryService
    ) { }

    @Post('/product-categories')
    @ApiBody({ type: [CategoryRequestDto] })
    async create(@Body() createProductCategoryDtos: CategoryRequestDto[]): Promise<CategoryRequestDto[]> {
        return await this.productCategoryService.create(
            createProductCategoryDtos
        );
    }

    @Get('/product-categories')
    async findAll(): Promise<CategoryRequestDto[]> {
        return await this.productCategoryService.findAll();
    }

    @Get('/product-categories/:id')
    findOne(@Param() { id }: ObjectIdDto): Promise<CategoryRequestDto> {
        return this.productCategoryService.findById(id);
    }

    @Patch('/product-categories/:id')
    async update(
        @Param() { id }: ObjectIdDto,
        @Body() updateProductCategoryDto: UpdateProductCategoryDto
    ) {
        return await this.productCategoryService.update(
            id,
            updateProductCategoryDto
        );
    }

    @Delete('/product-categories/:id')
    async remove(@Param() { id }: ObjectIdDto) {
        return await this.productCategoryService.remove(id);
    }
}
