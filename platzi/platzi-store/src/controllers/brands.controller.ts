import { Controller, Get, Param } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get()
  getBrand() {
    return `Hola soy un Brand`;
  }
  @Get(':id')
  getBrandId(@Param('id') id: any) {
    return `El id es : ${id}`;
  }
}
