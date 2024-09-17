import { Field, Form, Formik } from "formik";
import React from "react";
import styled from "styled-components";
import * as Yup from "yup";

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledField = styled(Field)`
  padding: 0.5rem;
  font-size: 1rem;
`;

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;
`;

const PaymentLinkSchema = Yup.object().shape({
  amount: Yup.number()
    .required("Amount is required")
    .positive("Amount must be positive"),
  currency: Yup.string().required("Currency is required"),
});

interface PaymentLinkFormProps {
  onSubmit: (values: { amount: number; currency: string }) => void;
}

const PaymentLinkForm: React.FC<PaymentLinkFormProps> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ amount: 0, currency: "USD" }}
      validationSchema={PaymentLinkSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <StyledForm>
          <StyledField name="amount" type="number" placeholder="Amount" />
          {errors.amount && touched.amount && <div>{errors.amount}</div>}

          <StyledField name="currency" as="select">
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </StyledField>
          {errors.currency && touched.currency && <div>{errors.currency}</div>}

          <StyledButton type="submit">Create Payment Link</StyledButton>
        </StyledForm>
      )}
    </Formik>
  );
};

export default PaymentLinkForm;
