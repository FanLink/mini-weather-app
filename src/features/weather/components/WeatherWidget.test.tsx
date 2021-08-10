import React from 'react';
import { render, screen } from '@testing-library/react';
import { WeatherWidget } from './WeatherWidget';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });
describe('WeatherStatistics', () => {
  test('find id in weather icon box', () => {
    const wrapper = enzyme.shallow(
      <WeatherWidget
        weatherStateAbbr="hc"
        weatherState="Heavy Cloud"
        temp={14}
        minTemp={15}
        maxTemp={24}
        humidity={59}
        visibility={9}
        pressure={1016}
        confidence={71}
        date={'2021-08-14'}
      />
    );
    expect(wrapper.find({ 'data-testid': 'the-hc-icon' }));
  });
  test('renders WeatherSearch component', () => {
    render(
      <WeatherWidget
        weatherStateAbbr="hc"
        weatherState="Heavy Cloud"
        temp={14}
        minTemp={15}
        maxTemp={24}
        humidity={59}
        visibility={9}
        pressure={1016}
        confidence={71}
        date={'2021-08-14'}
      />
    );
    expect(screen.getByText(/14°/)).toBeInTheDocument();
    expect(screen.getByText(/August 14/)).toBeInTheDocument();
    expect(screen.getByText(/Heavy Cloud/)).toBeInTheDocument();
    expect(screen.getByText(/Min:15°C/)).toBeInTheDocument();
    expect(screen.getByText(/Max:24°C/)).toBeInTheDocument();
    expect(screen.getByText(/Humidity:59%/)).toBeInTheDocument();
    expect(screen.getByText(/Visibility:9.0miles/)).toBeInTheDocument();
    expect(screen.getByText(/Pressure:1016mb/)).toBeInTheDocument();
    expect(screen.getByText(/Confidence:71%/)).toBeInTheDocument();
  });
});
