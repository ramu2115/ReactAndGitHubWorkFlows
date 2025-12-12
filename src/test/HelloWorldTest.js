import { render, screen } from '@testing-library/react';
import HelloWorld from './HelloWorld';

test('renders Hello World text', () => {
  render(<HelloWorld />);

  // Check if text is rendered
  const element = screen.getByText(/Hello World/i);

  expect(element).toBeInTheDocument();
});

test('has correct class names', () => {
  render(<HelloWorld />);

  const element = screen.getByText(/Hello World/i);

  expect(element).toHaveClass('text-primary');
  expect(element).toHaveClass('fst-italic');
  expect(element).toHaveClass('text-decoration-underline');
});