import React from 'react';

interface ErrorMessageProps {
  children: React.ReactNode;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ children }) => {
  return (
    <div className="text-red-500 p-3 border border-red-500 rounded-md mb-3">
      {children}
    </div>
  );
};

export default ErrorMessage;
