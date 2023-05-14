import React from 'react';
import { render, screen } from '@testing-library/react';
import ShowList from './ShowList';

test('renders a list of TV shows', async () => {
  render(<ShowList />);
  const showListItems = await screen.findAllByRole('listitem');
  expect(showListItems).toHaveLength(250);
});
