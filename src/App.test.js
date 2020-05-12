import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import React from 'react';
import Game from './components/Game';

test('renders next move link', () => {
  const { getByText } = render(<BrowserRouter><Game /></BrowserRouter>);
  const nextMoveText = getByText(/next move/i);
  expect(nextMoveText).toBeInTheDocument();
});