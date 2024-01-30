import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductRatingService } from './product-rating.service';
import { CreateProductRatingDto } from './dto/create-product-rating.dto';
import { UpdateProductRatingDto } from './dto/update-product-rating.dto';

@Controller('product-rating')
export class ProductRatingController {
  constructor(private readonly productRatingService: ProductRatingService) {}

  @Post()
  create(@Body() createProductRatingDto: CreateProductRatingDto) {
    return this.productRatingService.create(createProductRatingDto);
  }

  @Get()
  findAll() {
    return this.productRatingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productRatingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductRatingDto: UpdateProductRatingDto) {
    return this.productRatingService.update(+id, updateProductRatingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productRatingService.remove(+id);
  }
}
