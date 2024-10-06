import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CreatedPaymentLink from "../components/CreatedPaymentLink";
import ErrorMessage from "../components/ErrorMessage";
import LoadingSpinner from "../components/LoadingSpinner";
import PaymentLinkForm from "../components/PaymentLinkForm";
import { createPaymentLinkAsync } from "../store/paymentLinksSlice";
import { AppDispatch } from "../store/store";

const CreatePaymentLink: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [createdLink, setCreatedLink] = useState<string | null>(null);

  const handleSubmit = async (values: { amount: number; currency: string }) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await dispatch(createPaymentLinkAsync(values)).unwrap();
      setCreatedLink(result.paymentLink.url);
    } catch (error) {
      console.error("Failed to create payment link:", error);
      setError("Failed to create payment link. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Create Payment Link
      </h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {isLoading ? (
          <div className="flex justify-center items-center">
            <LoadingSpinner />
          </div>
        ) : createdLink ? (
          <CreatedPaymentLink url={createdLink} />
        ) : (
          <PaymentLinkForm onSubmit={handleSubmit} />
        )}
      </div>
    </div>
  );
};

export default CreatePaymentLink;
