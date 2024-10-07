import { Test, TestingModule } from '@nestjs/testing';
import { Decimal } from '@prisma/client/runtime/library';
import { PrismaService } from '../prisma/prisma.service';
import { TransactionsService } from './transactions.service';

describe('TransactionsService', () => {
  let service: TransactionsService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TransactionsService,
        {
          provide: PrismaService,
          useValue: {
            transaction: {
              update: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    service = module.get<TransactionsService>(TransactionsService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  describe('updateStatus', () => {
    it('should update transaction status', async () => {
      const mockTransaction = {
        id: 1,
        status: 'approved',
        paymentLinkId: 1,
        amount: new Decimal(100),
        currency: 'USD',
        createdAt: new Date(),
        updatedAt: new Date(),
        merchantId: 1,
      };

      jest
        .spyOn(prismaService.transaction, 'update')
        .mockResolvedValue(mockTransaction);

      const result = await service.updateStatus(1, 'approved');
      expect(result).toEqual(mockTransaction);
      expect(prismaService.transaction.update).toHaveBeenCalledWith({
        where: { id: 1 },
        data: { status: 'approved' },
      });
    });
  });
});
