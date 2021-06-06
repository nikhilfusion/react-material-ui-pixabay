import React from 'react';
import NotFound from './NotFound';
import { render, screen } from '@testing-library/react';

test("NotFound renders with correct text", () => {
  const { getByTestId } = render(<NotFound />);
  const headerEl = getByTestId("title");
  expect(headerEl.textContent).toBe("404: The page you are looking for isn’t here");
})

test("Button text", () => {
  render(<NotFound />);
  expect(screen.getByRole('button')).toHaveTextContent('Back to home');
})

