import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductDiscussionService } from './product-discussion.service';
import { CreateProductDiscussionDto } from './dto/create-product-discussion.dto';
import { UpdateProductDiscussionDto } from './dto/update-product-discussion.dto';

@Controller('product-discussion')
export class ProductDiscussionController {
  constructor(private readonly productDiscussionService: ProductDiscussionService) {}

  @Post()
  create(@Body() createProductDiscussionDto: CreateProductDiscussionDto) {
    return this.productDiscussionService.create(createProductDiscussionDto);
  }

  @Get()
  findAll() {
    return this.productDiscussionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productDiscussionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDiscussionDto: UpdateProductDiscussionDto) {
    return this.productDiscussionService.update(+id, updateProductDiscussionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productDiscussionService.remove(+id);
  }
}
