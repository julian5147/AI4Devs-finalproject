import axios from "axios";

const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL ?? "http://localhost:3010";

const api = axios.create({
  baseURL: API_BASE_URL,
});

const login = async () => {
  const data = {
    email: "test@example.com",
    password: "testpassword",
  };
  const response = await api.post("/auth/login", data);
  return response.data;
};

export const createPaymentLink = async (data: any) => {
  const loginResponse = await login();

  const response = await api.post(
    "/payment-links",
    { merchantId: loginResponse.merchantId, ...data },
    {
      headers: {
        Authorization: `Bearer ${loginResponse.access_token}`,
      },
    }
  );
  return response.data;
};

export const getTransactions = async () => {
  const loginResponse = await login();
  const response = await api.get(`/transactions/merchant/${loginResponse.merchantId}`, {
    headers: {
      Authorization: `Bearer ${loginResponse.access_token}`,
    },
  });
  return response.data;
};

export default api;
