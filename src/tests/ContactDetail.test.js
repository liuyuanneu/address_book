import React from 'react';

import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import ContactDetail from '../components/ContactDetail';

test('renders address_book', () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <ContactDetail />
    </Router>,
  );

  expect(screen.getByText('Back to Main Page')).toBeInTheDocument();
});
