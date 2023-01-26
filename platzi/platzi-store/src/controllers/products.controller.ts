import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { ParseIntPipe } from 'src/common/parse-int.pipe';
import { CreateProductDto } from 'src/dtos/products.dto';
import { ProductsService } from 'src/services/products/products.service';

@Controller('products')
export class ProductsController {
  //injectarlo con contructor
  constructor(private productsService: ProductsService) {}
  /*
  formas de enviar datos
  @Get('products/:id')
  getProduct(@Param() params: any) {
    return `product ${params.id}`;
  }*/
  /*
cuando se tenga rutas dinaicas con parametros y otras no solo se debe aregrar
primero las rutas no dinamicas.
*/
  @Get('filter')
  getProductFilter() {
    return {
      message: `Soy un filter!..`,
    };
  }
  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('productId', ParseIntPipe) productId: number) {
    //@Res() response: Response,
    //Temporalmente no funcionaba por que estaba solicitando que la Res que es de expres lo resuelva
    //como lo manejaria node Express
    /*  response.status(200).send({
      message: `product: ${productId}`,
    });*/
    return this.productsService.findOne(productId);
  }

  @Get()
  getProducts() {
    /*return {
      message: '`product ${productId}`',
    };*/
    return this.productsService.findAll();
  }

  @Get()
  getProductsQuery(
    @Query('limit') limit: number,
    @Query('offset') offset: number,
  ) {
    // const { limit, offset } = params;
    return {
      message: `product: limit>= ${limit} offset>= ${offset}`,
    };
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    /*
    return {
      message: 'Accion de crear!....',
      payload,
    };
    */
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() payload: any) {
    /*
    return {
      id,
      payload,
    };*/
    return this.productsService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      id,
    };
  }
}
