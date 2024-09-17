import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePaymentLinkDto } from './dto/create-payment-link.dto';

@Injectable()
export class PaymentLinksService {
  constructor(private prisma: PrismaService) {}

  async create(createPaymentLinkDto: CreatePaymentLinkDto) {
    return this.prisma.paymentLink.create({
      data: {
        ...createPaymentLinkDto,
        url: this.generateUniqueUrl(),
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.paymentLink.findUnique({
      where: { id },
    });
  }

  private generateUniqueUrl(): string {
    // Implement a method to generate a unique URL
    return `https://quickash.com/pay/${Math.random().toString(36).slice(2, 11)}`;
  }
}
