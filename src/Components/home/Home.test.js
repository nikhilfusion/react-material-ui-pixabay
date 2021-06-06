import React from 'react';
import Home from './Home';
import { render } from '@testing-library/react';

test("render Home page", () => {
  const { getByAltText } = render(<Home />)
  expect(getByAltText('loading')).toBeDefined();
})
