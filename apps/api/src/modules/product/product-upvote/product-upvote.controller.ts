import {
    Body,
    ConflictException,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    UseFilters
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ObjectIdDto } from '@utils/validations/object-id.validation';
import { ApiResponseEnvelope } from 'src/middlewares/decorators/response-envelope.decorator';
import { HttpExceptionFilter } from 'src/middlewares/global-error.middleware';
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
        @Param() { id: productId }: ObjectIdDto,
        @Body() createProductUpvoteDto: ProductUpvoteRequestDto
    ) {
        this.matchAndValidateProductId(productId, createProductUpvoteDto);
        return this.productUpvoteService.create(
            productId,
            createProductUpvoteDto
        );
    }

    private matchAndValidateProductId(
        productId: string,
        createProductUpvoteDto: ProductUpvoteRequestDto
    ) {
        if (productId != createProductUpvoteDto.productId) {
            throw new ConflictException(
                'Product ID mismatch in body and path variables'
            );
        }
    }

    @Get('/products/:productId/product-upvotes')
    async findAll() {
        return await this.productUpvoteService.findAll();
    }

    @Delete('/products/:productId/product-upvotes/:id')
    remove(@Param('id') id: string) {
        return this.productUpvoteService.remove(+id);
    }
}
