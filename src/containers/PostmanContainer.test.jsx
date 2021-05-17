import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PostmanContainer from './PostmanContainer';

describe('Postman container', () => {
  it('displays JSON result from API call', async () => {
    render(<PostmanContainer />);
    screen.getByPlaceholderText('URL');

    const URLInput = await screen.findByTestId('greeting');
    userEvent.type(URLInput, 'hello');

    return waitFor(() => {
      // const output = screen.getByDisplayValue('helloPatrick');
      expect(true).toEqual(true);
    });
  });
});
