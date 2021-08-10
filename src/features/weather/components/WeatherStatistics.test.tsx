import React from 'react';
import { render, screen } from '@testing-library/react';
import WeatherStatistics from './WeatherStatistics';

describe('WeatherStatistics', () => {
  test('renders WeatherSearch component', () => {
    render(
      <WeatherStatistics
        title="Ho Chi Minh"
        time="12"
        timeZone="12"
        sunrise="12"
        sunset="2021-08-09T20:34:11.566659+01:00"
      />
    );
    expect(screen.getByText(/Ho Chi Minh/)).toBeInTheDocument();
    expect(screen.getByText(/Sat, December 1, 2001, 12:00:00 AM/)).toBeInTheDocument();
    expect(screen.getByText(/Time Zone: 12/)).toBeInTheDocument();
    expect(screen.getByText(/Sunrise: 12 AM/)).toBeInTheDocument();
    expect(screen.getByText(/Sunset: 2 AM/)).toBeInTheDocument();
  });
});
