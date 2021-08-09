import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { LocationOption } from 'models';
import WeatherSearch from './WeatherSearch';

describe('WeatherSearch', () => {
  const options: LocationOption[] = [{ label: 'test', value: 123 }];
  const onSearchChange = jest.fn();
  const onLocationChange = jest.fn();

  test('renders WeatherSearch component', () => {
    render(
      <WeatherSearch
        options={options}
        onSearchChange={onSearchChange}
        onLocationChange={onLocationChange}
      />
    );
    // const element = screen.getByRole('combobox');
    // fireEvent.change(screen.getByTestId(/auto-suggest-location-label/i), {
    //   target: { value: 'JavaScript' },
    // });
    // expect(onSearchChange).toHaveBeenCalledTimes(1);
    // expect(onLocationChange).toHaveBeenCalledTimes(1);
    expect(screen.getByText(/Search Weather By City/)).toBeInTheDocument();
  });
});
