import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { RegisterUserDto } from './products.dtos';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: UsersService) {}

  @Post()
  async createProduct(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }
}
