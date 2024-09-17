import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsController } from './transactions.controller';
import { TransactionsService } from './transactions.service';
import { Decimal } from '@prisma/client/runtime/library';

describe('TransactionsController', () => {
  let controller: TransactionsController;
  let service: TransactionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransactionsController],
      providers: [
        {
          provide: TransactionsService,
          useValue: {
            create: jest.fn(),
            findAllByMerchant: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<TransactionsController>(TransactionsController);
    service = module.get<TransactionsService>(TransactionsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a transaction', async () => {
      const createTransactionDto = {
        paymentLinkId: 1,
        amount: 100,
        currency: 'USD',
        merchantId: 1,
      };

      const expectedResult = {
        id: 1,
        ...createTransactionDto,
        status: 'completed',
        createdAt: new Date(),
        updatedAt: new Date(),
        amount: new Decimal(createTransactionDto.amount),
      };

      jest.spyOn(service, 'create').mockResolvedValue(expectedResult);

      const result = await controller.create(createTransactionDto);
      expect(result).toEqual(expectedResult);
    });
  });
});
