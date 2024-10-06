import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactions } from '../store/transactionsSlice';
import { AppDispatch, RootState } from '../store/store';
import PaginatedTransactionList from '../components/PaginatedTransactionList';

const Dashboard: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { transactions, status, error } = useSelector((state: RootState) => state.transactions);
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 10;

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
    <div className="max-w-6xl mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <Link 
          to="/create-payment-link" 
          className="px-6 py-3 bg-blue-500 text-white no-underline rounded-lg hover:bg-blue-600 transition-colors"
        >
          Create Payment Link
        </Link>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <PaginatedTransactionList 
          transactions={transactions}
          currentPage={currentPage}
          transactionsPerPage={transactionsPerPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Dashboard;
