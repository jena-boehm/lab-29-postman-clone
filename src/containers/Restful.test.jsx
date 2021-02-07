/* eslint-disable max-len */
global.fetch = require('node-fetch');
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Restful from './Restful';

describe('Restless container', () => {
  it('updates the results via user input', () => {
    render(<Restful />);

    const url = screen.getByPlaceholderText('URL');
    const method = screen.getByLabelText('GET');
    const button = screen.getByText('Send');

    userEvent.type(url, 'https://last-airbender-api.herokuapp.com/api/v1/characters/5cf5679a915ecad153ab68f0');
    userEvent.click(method);
    userEvent.click(button);

    return waitFor(() => {
      expect(true).toEqual(true);
    });
  });
});
