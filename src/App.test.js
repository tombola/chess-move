import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import React from 'react';
import App from './components/App';

test('renders next move link', () => {
  const { getByText } = render(<BrowserRouter><App /></BrowserRouter>);
  const nextMoveText = getByText(/next move/i);
  expect(nextMoveText).toBeInTheDocument();
});