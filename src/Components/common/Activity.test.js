import React from 'react';
import Activity from './Activity';
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

test("render Activity data while loading Activity component", () => {
  const { getByText } = render(<Activity activityData={mockData} />)
  expect(getByText(mockData.comments)).toBeDefined();
  expect(getByText(mockData.downloads)).toBeDefined();
  expect(getByText(mockData.favorites)).toBeDefined();
  expect(getByText(mockData.likes)).toBeDefined();
})
