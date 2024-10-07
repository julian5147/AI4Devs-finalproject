import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { Decimal } from '@prisma/client/runtime/library';
import { PrismaService } from '../prisma/prisma.service';
import { PaymentLinksService } from './payment-links.service';

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
            transaction: {
              create: jest.fn(),
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
      expect(result.paymentLink).toEqual(expectedResult);
    });

    it('should create a payment link and a pending transaction', async () => {
      const createPaymentLinkDto = {
        merchantId: 1,
        amount: 100,
        currency: 'USD',
      };

      const expectedPaymentLink = {
        id: 1,
        ...createPaymentLinkDto,
        url: 'http://example.com/pay/1',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        amount: new Decimal(createPaymentLinkDto.amount),
      };

      const expectedTransaction = {
        id: 1,
        paymentLinkId: 1,
        amount: new Decimal(createPaymentLinkDto.amount),
        currency: createPaymentLinkDto.currency,
        status: 'pending',
        merchantId: createPaymentLinkDto.merchantId,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest
        .spyOn(prismaService.paymentLink, 'create')
        .mockResolvedValue(expectedPaymentLink);
      jest
        .spyOn(prismaService.transaction, 'create')
        .mockResolvedValue(expectedTransaction);

      const result = await service.create(createPaymentLinkDto);

      expect(prismaService.paymentLink.create).toHaveBeenCalledWith({
        data: {
          ...createPaymentLinkDto,
          url: expect.any(String),
        },
      });

      expect(prismaService.transaction.create).toHaveBeenCalledWith({
        data: {
          paymentLinkId: expectedPaymentLink.id,
          amount: expectedPaymentLink.amount,
          currency: expectedPaymentLink.currency,
          status: 'pending',
          merchantId: expectedPaymentLink.merchantId,
        },
      });

      expect(result).toEqual({
        paymentLink: expectedPaymentLink,
        transaction: expectedTransaction,
      });
    });
  });

  describe('findByUrl', () => {
    it('should return a payment link when found', async () => {
      const mockPaymentLink = {
        id: 1,
        url: 'test-url',
        amount: new Decimal(100),
        currency: 'USD',
        transaction: {
          id: 1,
          status: 'pending',
          amount: new Decimal(100),
        },
        merchantId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
      };

      jest
        .spyOn(prismaService.paymentLink, 'findUnique')
        .mockResolvedValue(mockPaymentLink);

      const result = await service.findByUrl('test-url');
      expect(result).toEqual(mockPaymentLink);
    });

    it('should throw NotFoundException when payment link is not found', async () => {
      jest
        .spyOn(prismaService.paymentLink, 'findUnique')
        .mockResolvedValue(null);

      await expect(service.findByUrl('non-existent-url')).rejects.toThrow(
        NotFoundException,
      );
    });
  });
});
