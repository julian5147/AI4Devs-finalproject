import { Test, TestingModule } from '@nestjs/testing';
import { Decimal } from '@prisma/client/runtime/library';
import { CreatePaymentLinkDto } from './dto/create-payment-link.dto';
import { PaymentLinksController } from './payment-links.controller';
import { PaymentLinksService } from './payment-links.service';

describe('PaymentLinksController', () => {
  let controller: PaymentLinksController;
  let service: PaymentLinksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentLinksController],
      providers: [
        {
          provide: PaymentLinksService,
          useValue: {
            create: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<PaymentLinksController>(PaymentLinksController);
    service = module.get<PaymentLinksService>(PaymentLinksService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a payment link and a pending transaction', async () => {
      const createPaymentLinkDto: CreatePaymentLinkDto = {
        merchantId: 1,
        amount: 100,
        currency: 'USD',
      };

      const mockResult = {
        paymentLink: {
          id: 1,
          url: 'http://example.com/pay/1',
          ...createPaymentLinkDto,
          createdAt: new Date(),
          updatedAt: new Date(),
          active: true,
          amount: new Decimal(createPaymentLinkDto.amount),
        },
        transaction: {
          id: 1,
          status: 'pending',
          createdAt: new Date(),
          updatedAt: new Date(),
          paymentLinkId: 1,
          amount: new Decimal(createPaymentLinkDto.amount),
          currency: createPaymentLinkDto.currency,
          merchantId: createPaymentLinkDto.merchantId,
        },
      };

      jest.spyOn(service, 'create').mockResolvedValue(mockResult);

      const result = await controller.create(createPaymentLinkDto);

      expect(service.create).toHaveBeenCalledWith(createPaymentLinkDto);
      expect(result).toEqual({
        paymentLink: mockResult.paymentLink,
        transaction: {
          id: mockResult.transaction.id,
          status: mockResult.transaction.status,
        },
      });
    });
  });
});
