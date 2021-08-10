import React from 'react';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WeatherIcons from './WeatherIcons';

enzyme.configure({ adapter: new Adapter() });
describe('WeatherStatistics', () => {
  test('find id in weather icon box', () => {
    const wrapper = enzyme.shallow(<WeatherIcons weatherStateAbbr={'hc'} />);
    expect(wrapper.find({ 'data-testid': 'the-hc-icon' }));
  });
});
