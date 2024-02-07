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
import { ObjectIdDto } from '@utils/validations/object-id.validation';
import { ApiResponseEnvelope } from 'src/middlewares/decorators/response-envelope.decorator';
import { HttpExceptionFilter } from 'src/middlewares/global-error.middleware';
import { CreateCategoryRequestDto } from './dto/category-request.dto';
import { UpdateProductCategoryDto } from './dto/update-request.dto';
import { ProductCategoryService } from './product-category.service';

@ApiTags('Categories Service API')
@Controller({
    version: '1',
})
@UseFilters(new HttpExceptionFilter())
@ApiResponseEnvelope()
export class ProductCategoryController {
    constructor(
        private readonly productCategoryService: ProductCategoryService,
    ) { }

    @Post('/product-categories')
    create(@Body() createProductCategoryDtos: CreateCategoryRequestDto[]) {
        return this.productCategoryService.create(createProductCategoryDtos);
    }

    @Get('/product-categories')
    findAll() {
        return this.productCategoryService.findAll();
    }

    @Get('/product-categories/:id')
    findOne(@Param() { id }: ObjectIdDto) {
        return this.productCategoryService.findById(id);
    }

    @Patch('/product-categories/:id')
    update(
        @Param() { id }: ObjectIdDto,
        @Body() updateProductCategoryDto: UpdateProductCategoryDto,
    ) {
        return this.productCategoryService.update(
            id,
            updateProductCategoryDto,
        );
    }

    @Delete('/product-categories/:id')
    remove(@Param() { id }: ObjectIdDto) {
        return this.productCategoryService.remove(id);
    }
}
