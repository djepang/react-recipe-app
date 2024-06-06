import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('toggles theme between light and dark', () => {
  const { getByText } = render(<App />);
  const button = getByText(/Switch to dark theme/i);
  fireEvent.click(button);
  expect(button).toHaveTextContent(/Switch to light theme/i);
});
