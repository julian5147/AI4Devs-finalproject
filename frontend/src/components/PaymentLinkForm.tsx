import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

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
        <Form className="flex flex-col gap-4">
          <div>
            <Field
              name="amount"
              type="number"
              placeholder="Amount"
              className="w-full p-2 text-base border rounded"
            />
            {errors.amount && touched.amount && (
              <div className="text-red-500 text-sm">{errors.amount}</div>
            )}
          </div>

          <div>
            <Field
              name="currency"
              as="select"
              className="w-full p-2 text-base border rounded"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </Field>
            {errors.currency && touched.currency && (
              <div className="text-red-500 text-sm">{errors.currency}</div>
            )}
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer text-base hover:bg-blue-600 transition-colors"
          >
            Create Payment Link
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default PaymentLinkForm;
