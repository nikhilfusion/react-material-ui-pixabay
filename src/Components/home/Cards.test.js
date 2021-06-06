import React from 'react';
import Cards from './Cards';
import { render } from '@testing-library/react';

const mockData = {
  comments: 24,
  downloads: 22448,
  favorites: 208,
  id: 52358,
  likes: 230,
  previewURL: "https://cdn.pixabay.com/photo/2012/07/12/14/50/flower-52358_150.jpg",
  tags: "flower, petals, plant",
  user: "PeterDargatz",
  views: 46394
};

test("render username while loading Card component", () => {
  const { getByTitle, getByText } = render(<Cards cardData={mockData} />)
  expect(getByTitle(mockData.user)).toBeDefined();
  expect(getByText(mockData.tags)).toBeDefined();
})

test("render Activity data while loading Card component", () => {
  const {getByText } = render(<Cards cardData={mockData} />)
  expect(getByText(mockData.comments)).toBeDefined();
  expect(getByText(mockData.downloads)).toBeDefined();
  expect(getByText(mockData.favorites)).toBeDefined();
  expect(getByText(mockData.likes)).toBeDefined();
})
