import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import TransactionList from '../components/TransactionList';
import { fetchTransactions } from '../store/transactionsSlice';
import { AppDispatch, RootState } from '../store/store';

const TransactionsContainer = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  color: #333;
`;

const Transactions: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { transactions, status, error } = useSelector((state: RootState) => state.transactions);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTransactions());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <TransactionsContainer>
      <Title>Transactions</Title>
      <TransactionList transactions={transactions} />
    </TransactionsContainer>
  );
};

export default Transactions;
