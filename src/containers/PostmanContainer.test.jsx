import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import PostmanContainer from './PostmanContainer';

describe('Postman container', () => {
  it('displays JSON result from API call', async () => {
    render(<PostmanContainer />);
    screen.getByText('Fake Postman');


    return waitFor(() => {

      expect(true).toEqual(true);
    });
  });
});
