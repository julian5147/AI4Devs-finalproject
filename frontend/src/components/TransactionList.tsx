import React from 'react';

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
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th className="bg-gray-100 p-3 text-left">ID</th>
          <th className="bg-gray-100 p-3 text-left">Amount</th>
          <th className="bg-gray-100 p-3 text-left">Currency</th>
          <th className="bg-gray-100 p-3 text-left">Status</th>
          <th className="bg-gray-100 p-3 text-left">Date</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td className="p-3 border-b">{transaction.id}</td>
            <td className="p-3 border-b">{transaction.amount}</td>
            <td className="p-3 border-b">{transaction.currency}</td>
            <td className="p-3 border-b">{transaction.status}</td>
            <td className="p-3 border-b">{new Date(transaction.createdAt).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionList;
