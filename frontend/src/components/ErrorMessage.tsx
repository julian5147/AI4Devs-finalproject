import React from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  color: red;
  padding: 10px;
  border: 1px solid red;
  border-radius: 4px;
  margin-bottom: 10px;
`;

interface ErrorMessageProps {
  children: React.ReactNode;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ children }) => {
  return <ErrorContainer>{children}</ErrorContainer>;
};

export default ErrorMessage;
