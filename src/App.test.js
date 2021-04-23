import React from 'react';

import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './redux/store';

test('renders address_book', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  const placeholder = screen.getByPlaceholderText('Search...');
  expect(placeholder).toBeInTheDocument();
});
