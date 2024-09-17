import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let jwtToken: string;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    // Login to get JWT token
    const loginResponse = await request(app.getHttpServer())
      .post('/auth/login')
      .send({ email: 'test@example.com', password: 'testpassword' })
      .expect(200);

    jwtToken = loginResponse.body.access_token;
  });

  it('/payment-links (POST)', () => {
    return request(app.getHttpServer())
      .post('/payment-links')
      .set('Authorization', `Bearer ${jwtToken}`)
      .send({
        merchantId: 2,
        amount: 100,
        currency: 'USD',
      })
      .expect(201)
      .expect((res) => {
        expect(res.body).toHaveProperty('id');
        expect(res.body).toHaveProperty('url');
      });
  });

  it('/transactions (POST)', () => {
    return request(app.getHttpServer())
      .post('/transactions')
      .set('Authorization', `Bearer ${jwtToken}`)
      .send({
        paymentLinkId: 2,
        amount: 100,
        currency: 'USD',
        merchantId: 2,
      })
      .expect(201)
      .expect((res) => {
        expect(res.body).toHaveProperty('id');
        expect(res.body).toHaveProperty('status');
      });
  });

  it('/transactions/merchant/:id (GET)', () => {
    return request(app.getHttpServer())
      .get('/transactions/merchant/2')
      .set('Authorization', `Bearer ${jwtToken}`)
      .expect(200)
      .expect((res) => {
        expect(Array.isArray(res.body)).toBe(true);
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
