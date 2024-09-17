import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PaymentLinkForm from '../components/PaymentLinkForm';
import { createPaymentLinkAsync } from '../store/paymentLinksSlice';
import { AppDispatch } from '../store/store';
import ErrorMessage from '../components/ErrorMessage';
import LoadingSpinner from '../components/LoadingSpinner';

const CreatePaymentLinkContainer = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  color: #333;
`;

const CreatePaymentLink: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (values: { amount: number; currency: string }) => {
    setIsLoading(true);
    setError(null);
    try {
      await dispatch(createPaymentLinkAsync(values)).unwrap();
      navigate('/');
    } catch (error) {
      console.error('Failed to create payment link:', error);
      setError('Failed to create payment link. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CreatePaymentLinkContainer>
      <Title>Create Payment Link</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <PaymentLinkForm onSubmit={handleSubmit} />
      )}
    </CreatePaymentLinkContainer>
  );
};

export default CreatePaymentLink;
