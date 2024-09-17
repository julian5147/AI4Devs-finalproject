import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import CreatePaymentLink from './CreatePaymentLink';

const mockStore = configureStore([thunk as any]);

describe('CreatePaymentLink', () => {
  it('renders the form and handles submission', async () => {
    const store = mockStore({});
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CreatePaymentLink />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText('Create Payment Link')).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText('Amount'), { target: { value: '100' } });
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'USD' } });
    fireEvent.click(screen.getByText('Create Payment Link'));

    // Add assertions for form submission and API call
  });
});
