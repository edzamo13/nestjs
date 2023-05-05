import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { Product } from '../../database/entities/product.entity';
import {
  CreateProductDto,
  FilterProductsDto,
  UpdateProductDto,
} from './dtos/products.dtos';

@Injectable()
export class ProductsService {
  @InjectModel(Product.name)
  private productModel: Model<Product>;
  /*
  async findAll(params: FilterProductsDto) {
    if (params) {
      const filters: FilterQuery<Product> = {};
      const { minPrice, maxPrice } = params;
      if (minPrice && maxPrice) {
        //$get this part significant that is mayor equals $lte minor equals  
        filters.price = { $gte: minPrice, $lte: maxPrice };
      }
      return this.productModel.find(filters).exec();
    }
    return this.productModel.find().exec();
  }

  async findOne(id: string) {
    const product = await this.productModel.findById(id).exec();
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }*/

  findAll(params?: FilterProductsDto) {
    if (params) {
      const filters: FilterQuery<Product> = {};
      const { limit, offset } = params;
      const { minPrice, maxPrice } = params;
      if (minPrice && maxPrice) {
        filters.price = { $gte: minPrice, $lte: maxPrice };
      }
      return this.productModel
        .find(filters)
        .populate('brand')
        .skip(offset)
        .limit(limit)
        .exec();
    }
    return this.productModel.find().populate('brand').exec();
  }

  async findOne(id: string) {
    const product = await this.productModel.findById(id).exec();
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }
  create(data: CreateProductDto) {
    const newProduct = new this.productModel(data);
    return newProduct.save();
  }

  async update(id: string, data: UpdateProductDto) {
    const product = this.productModel
      .findByIdAndUpdate(id, { $set: data }, { new: true })
      .exec();
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  async remove(id: string) {
    return this.productModel.findByIdAndDelete(id);
  }
}
