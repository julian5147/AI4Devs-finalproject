import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TransactionList from '../components/TransactionList';
import { fetchTransactions } from '../store/transactionsSlice';
import { AppDispatch, RootState } from '../store/store';

const Transactions: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { transactions, status, error } = useSelector((state: RootState) => state.transactions);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTransactions());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div className="p-5">Loading...</div>;
  }

  if (status === 'failed') {
    return <div className="p-5 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Transactions</h1>
      <TransactionList transactions={transactions} />
    </div>
  );
};

export default Transactions;
