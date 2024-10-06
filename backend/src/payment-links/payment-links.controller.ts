import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreatePaymentLinkDto } from './dto/create-payment-link.dto';
import { PaymentLinksService } from './payment-links.service';

@ApiTags('payment-links')
@Controller('payment-links')
@UseGuards(JwtAuthGuard)
export class PaymentLinksController {
  constructor(private readonly paymentLinksService: PaymentLinksService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new payment link and pending transaction',
  })
  @ApiResponse({
    status: 201,
    description:
      'The payment link and pending transaction have been successfully created.',
  })
  async create(@Body() createPaymentLinkDto: CreatePaymentLinkDto) {
    const result = await this.paymentLinksService.create(createPaymentLinkDto);
    return {
      paymentLink: result.paymentLink,
      transaction: {
        id: result.transaction.id,
        status: result.transaction.status,
      },
    };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a payment link by id' })
  @ApiResponse({ status: 200, description: 'Return the payment link.' })
  findOne(@Param('id') id: string) {
    return this.paymentLinksService.findOne(+id);
  }

  @Get('by-url/:url')
  @ApiOperation({ summary: 'Get a payment link by url' })
  @ApiResponse({ status: 200, description: 'Return the payment link.' })
  findByUrl(@Param('url') url: string) {
    return this.paymentLinksService.findByUrl(url);
  }
}
