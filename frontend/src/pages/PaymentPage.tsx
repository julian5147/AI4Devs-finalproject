import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPaymentLinkByUrl } from "../store/paymentLinksSlice";
import { AppDispatch } from "../store/store";
import { updateTransactionStatusAsync } from "../store/transactionsSlice";

const PaymentPage: React.FC = () => {
  const { url } = useParams<{ url: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const [paymentLink, setPaymentLink] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (url) {
      dispatch(fetchPaymentLinkByUrl(url))
        .unwrap()
        .then(setPaymentLink)
        .catch((err) => setError("Failed to load payment link"));
    }
  }, [url, dispatch]);

  const handlePayment = async (status: "approved" | "rejected") => {
    try {
      await dispatch(
        updateTransactionStatusAsync({
          id: paymentLink.transactions[0].id,
          status,
        })
      ).unwrap();
      setPaymentLink({
        ...paymentLink,
        transactions: { ...paymentLink.transactions, status },
      });
      // Reload the page after updating the status
      window.location.reload();
    } catch (err) {
      setError("Failed to process payment");
    }
  };

  if (error) return <div className="text-red-500">{error}</div>;
  if (!paymentLink) return <div>Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Payment Page</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <p className="text-lg mb-4">
          Amount: <span className="font-semibold">{paymentLink.amount} {paymentLink.currency}</span>
        </p>
        <p className="text-lg mb-4">
          Status: <span className="font-semibold">{paymentLink.transactions[0].status}</span>
        </p>
        {paymentLink.transactions[0].status === "pending" && (
          <div className="mt-6">
            <button
              onClick={() => handlePayment("approved")}
              className="bg-green-500 text-white px-6 py-3 rounded-lg mr-4 hover:bg-green-600 transition-colors"
            >
              Approve Payment
            </button>
            <button
              onClick={() => handlePayment("rejected")}
              className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors"
            >
              Reject Payment
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
