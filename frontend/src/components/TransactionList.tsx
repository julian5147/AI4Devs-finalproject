import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  background-color: #f2f2f2;
  padding: 12px;
  text-align: left;
`;

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #ddd;
`;

interface Transaction {
  id: number;
  amount: number;
  currency: string;
  status: string;
  createdAt: string;
}

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <Table>
      <thead>
        <tr>
          <Th>ID</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
          <Th>Status</Th>
          <Th>Date</Th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <Td>{transaction.id}</Td>
            <Td>{transaction.amount}</Td>
            <Td>{transaction.currency}</Td>
            <Td>{transaction.status}</Td>
            <Td>{new Date(transaction.createdAt).toLocaleString()}</Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TransactionList;
