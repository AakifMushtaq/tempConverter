import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { TempConverterStore } from './stores/TempConverterStore';

test('renders learn react link', () => {
  render(<App tempConverterStore={new TempConverterStore()} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
