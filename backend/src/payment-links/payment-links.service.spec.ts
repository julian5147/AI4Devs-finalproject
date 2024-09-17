import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { PaymentLinksService } from './payment-links.service';
import { Decimal } from '@prisma/client/runtime/library';

describe('PaymentLinksService', () => {
  let service: PaymentLinksService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PaymentLinksService,
        {
          provide: PrismaService,
          useValue: {
            paymentLink: {
              create: jest.fn(),
              findUnique: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    service = module.get<PaymentLinksService>(PaymentLinksService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a payment link', async () => {
      const createPaymentLinkDto = {
        merchantId: 1,
        amount: 100,
        currency: 'USD',
      };

      const expectedResult = {
        id: 1,
        ...createPaymentLinkDto,
        url: 'http://example.com/pay/1',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        amount: new Decimal(createPaymentLinkDto.amount),
      };

      jest
        .spyOn(prismaService.paymentLink, 'create')
        .mockResolvedValue(expectedResult);

      const result = await service.create(createPaymentLinkDto);
      expect(result).toEqual(expectedResult);
    });
  });
});
