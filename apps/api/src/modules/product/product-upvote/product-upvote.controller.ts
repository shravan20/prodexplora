import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductUpvoteService } from './product-upvote.service';
import { CreateProductUpvoteDto } from './dto/create-product-upvote.dto';
import { UpdateProductUpvoteDto } from './dto/update-product-upvote.dto';

@Controller('product-upvote')
export class ProductUpvoteController {
  constructor(private readonly productUpvoteService: ProductUpvoteService) {}

  @Post()
  create(@Body() createProductUpvoteDto: CreateProductUpvoteDto) {
    return this.productUpvoteService.create(createProductUpvoteDto);
  }

  @Get()
  findAll() {
    return this.productUpvoteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productUpvoteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductUpvoteDto: UpdateProductUpvoteDto) {
    return this.productUpvoteService.update(+id, updateProductUpvoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productUpvoteService.remove(+id);
  }
}
