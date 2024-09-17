import { configureStore } from '@reduxjs/toolkit';
import paymentLinksReducer from './paymentLinksSlice';
import transactionsReducer from './transactionsSlice';

export const store = configureStore({
  reducer: {
    paymentLinks: paymentLinksReducer,
    transactions: transactionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
