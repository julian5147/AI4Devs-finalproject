import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TransactionsService {
  constructor(private prisma: PrismaService) {}

  async create(createTransactionDto: CreateTransactionDto) {
    return this.prisma.transaction.create({
      data: { ...createTransactionDto, status: 'pending' },
    });
  }

  async findAllByMerchant(merchantId: number) {
    return this.prisma.transaction.findMany({
      where: { merchantId },
    });
  }
}
