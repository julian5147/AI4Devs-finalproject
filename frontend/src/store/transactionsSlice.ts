import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTransactions, updateTransactionStatus } from "../services/api";

export const fetchTransactions = createAsyncThunk(
  "transactions/fetchTransactions",
  async () => {
    const response = await getTransactions();
    return response;
  }
);

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: {
    transactions: [],
    status: "idle",
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.transactions = action.payload;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Failed to fetch transactions";
      });
  },
});

export const updateTransactionStatusAsync = createAsyncThunk(
  "transactions/updateTransactionStatus",
  async ({ id, status }: { id: number; status: "approved" | "rejected" }) => {
    const response = await updateTransactionStatus({ id, status });
    return response;
  }
);

export default transactionsSlice.reducer;
