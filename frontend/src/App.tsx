import React from "react";
import { Route, Routes } from "react-router-dom";
import CreatePaymentLink from "./pages/CreatePaymentLink";
import Dashboard from "./pages/Dashboard";
import PaymentPage from "./pages/PaymentPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/create-payment-link" element={<CreatePaymentLink />} />
      <Route path="/pay/:url" element={<PaymentPage />} />
    </Routes>
  );
};

export default App;
