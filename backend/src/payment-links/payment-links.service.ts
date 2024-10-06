import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePaymentLinkDto } from './dto/create-payment-link.dto';

@Injectable()
export class PaymentLinksService {
  constructor(private prisma: PrismaService) {}

  async create(createPaymentLinkDto: CreatePaymentLinkDto) {
    const paymentLink = await this.prisma.paymentLink.create({
      data: {
        ...createPaymentLinkDto,
        url: this.generateUniqueUrl(),
      },
    });

    const transaction = await this.prisma.transaction.create({
      data: {
        paymentLinkId: paymentLink.id,
        amount: paymentLink.amount,
        currency: paymentLink.currency,
        status: 'pending',
        merchantId: paymentLink.merchantId,
      },
    });

    return { paymentLink, transaction };
  }

  async findOne(id: number) {
    return this.prisma.paymentLink.findUnique({
      where: { id },
    });
  }

  async findByUrl(url: string) {
    const completeUrl = `${process.env.FRONTEND_DOMAIN}/pay/${url}`;
    const paymentLink = await this.prisma.paymentLink.findUnique({
      where: { url: completeUrl },
      include: { transactions: true },
    });

    if (!paymentLink) {
      throw new NotFoundException('Payment link not found');
    }

    return paymentLink;
  }

  private generateUniqueUrl(): string {
    return `${process.env.FRONTEND_DOMAIN}/pay/${Math.random().toString(36).slice(2, 11)}`;
  }
}
