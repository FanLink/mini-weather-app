import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { LocationOption } from 'models';
import WeatherSearch from './WeatherSearch';

describe('WeatherSearch', () => {
  const options: LocationOption[] = [{ label: 'test', value: 123 }];
  const option: any = { label: 'test', value: 123 };
  const onSearchChange = jest.fn();
  const onLocationChange = jest.fn(option);

  test('renders WeatherSearch component', () => {
    render(
      <WeatherSearch
        loading = {true}
        options={options}
        onSearchChange={onSearchChange}
        onLocationChange={onLocationChange}
      />
    );
    fireEvent.change(screen.getByLabelText(/Search Weather By City/), {
      target: option,
    });
    expect(onSearchChange).toHaveBeenCalledTimes(1);
    expect(onSearchChange).toHaveBeenCalledWith('123');
    expect(screen.getByLabelText(/Search Weather By City/)).toBeInTheDocument();
    expect(screen.getByText(/Loading…/)).toBeInTheDocument();
  });
});
