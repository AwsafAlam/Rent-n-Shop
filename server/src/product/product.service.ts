import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  create(createProductInput: CreateProductInput) {
    console.log(createProductInput);
    const out = this.prisma.product.create({
      data: createProductInput,
    });
    console.log(out);
    return out;
  }

  findAll() {
    //TODO: pagination pending
    return this.prisma.product.findMany();
  }

  findOne(id: number) {
    return this.prisma.product.findUnique({ where: { id } });
  }

  update(id: number, updateProductInput: UpdateProductInput) {
    return this.prisma.product.update({
      where: { id },
      data: updateProductInput,
    });
  }

  remove(id: number) {
    return this.prisma.product.delete({ where: { id } });
  }
}
