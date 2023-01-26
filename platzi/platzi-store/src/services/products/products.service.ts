import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dto';
import { Product } from 'src/entities/product.entity';

@Injectable()
export class ProductsService {
  //products quiero que seas del tipo Product creo el array con Product
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'bla bla',
      price: 122,
      stock: 12,
      image: 'image',
    },
  ];
  private counterId = 1;

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`Product #${id} not found `);
    } else {
      return product;
    }
  }

  create(payload: CreateProductDto) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  delete(id: number) {
    const indexProduct = this.products.findIndex((object) => {
      object.id === id;
    });

    if (indexProduct === -1) {
      return new NotFoundException(`Product #${id} not Found `);
    } else {
      this.products.splice(indexProduct, 1);
      return true;
    }
  }

  update(id: number, payload: UpdateProductDto) {
    const product = this.findOne(id);
    if (product) {
      const index = this.products.findIndex((item) => item.id === id);
      this.products[index] = {
        ...product,
        ...payload,
      };
      return this.products[index];
    }
    return null;
  }
}
