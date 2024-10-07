import React from 'react';
import TransactionList from './TransactionList';

interface Transaction {
  id: number;
  amount: number;
  currency: string;
  status: string;
  createdAt: string;
}

interface PaginatedTransactionListProps {
  transactions: Transaction[];
  currentPage: number;
  transactionsPerPage: number;
  setCurrentPage: (page: number) => void;
}

const PaginatedTransactionList: React.FC<PaginatedTransactionListProps> = ({
  transactions,
  currentPage,
  transactionsPerPage,
  setCurrentPage
}) => {
  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

  const totalPages = Math.ceil(transactions.length / transactionsPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <TransactionList transactions={currentTransactions} />
      <div className="flex justify-center mt-4">
        {pageNumbers.map(number => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={`mx-1 px-3 py-1 rounded ${
              currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PaginatedTransactionList;
