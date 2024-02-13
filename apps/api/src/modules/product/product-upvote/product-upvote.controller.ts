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
import { ApiTags } from '@nestjs/swagger';
import { ObjectIdDto } from '@utils/validations/object-id.validation';
import { ApiResponseEnvelope } from 'src/middlewares/decorators/response-envelope.decorator';
import { HttpExceptionFilter } from 'src/middlewares/global-error.middleware';
import { UpdateProductUpvoteRequestDto } from './dto/update-upvote.dto';
import { ProductUpvoteRequestDto } from './dto/upvote-request.dto';
import { ProductUpvoteService } from './product-upvote.service';

@ApiTags('Product Upvote Service')
@Controller({
    version: '1'
})
@UseFilters(new HttpExceptionFilter())
@ApiResponseEnvelope()
export class ProductUpvoteController {
    constructor(private readonly productUpvoteService: ProductUpvoteService) {}

    @Post('/products/:id/product-upvotes')
    create(
        @Param() { id }: ObjectIdDto,
        @Body() createProductUpvoteDto: ProductUpvoteRequestDto
    ) {
        return this.productUpvoteService.create(id, createProductUpvoteDto);
    }

    @Get('/products/:productId/product-upvotes')
    findAll() {
        return this.productUpvoteService.findAll();
    }

    @Patch('/products/:productId/product-upvotes/:id')
    update(
        @Param('id') id: string,
        @Body() updateProductUpvoteDto: UpdateProductUpvoteRequestDto
    ) {
        return this.productUpvoteService.update(+id, updateProductUpvoteDto);
    }

    @Delete('/products/:productId/product-upvotes/:id')
    remove(@Param('id') id: string) {
        return this.productUpvoteService.remove(+id);
    }
}
