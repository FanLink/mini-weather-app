import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

describe('App', () => {
  test('renders App component', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    // must have header
    expect(screen.getByText(/Weather App/)).toBeInTheDocument();
    // must have search bar
    expect(screen.getByText(/Search Weather By City/)).toBeInTheDocument();
  });
});
