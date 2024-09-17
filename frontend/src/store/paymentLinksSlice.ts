import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createPaymentLink } from '../services/api';

interface PaymentLink {
  id: number;
  merchantId: number;
  amount: number;
  currency: string;
  url: string;
  createdAt: string;
  updatedAt: string;
  active: boolean;
}

export const createPaymentLinkAsync = createAsyncThunk(
  'paymentLinks/createPaymentLink',
  async (paymentLinkData: any) => {
    const response = await createPaymentLink(paymentLinkData);
    return response;
  }
);

const paymentLinksSlice = createSlice({
  name: 'paymentLinks',
  initialState: {
    links: [] as PaymentLink[], // Add type annotation here
    status: 'idle',
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPaymentLinkAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createPaymentLinkAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.links.push(action.payload);
      })
      .addCase(createPaymentLinkAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Failed to create payment link';
      });
  },
});

export default paymentLinksSlice.reducer;
