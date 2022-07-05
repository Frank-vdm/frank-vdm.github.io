import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText("I'm Francois, a full-stack software engineer.");
  expect(linkElement).toBeInTheDocument();
});
