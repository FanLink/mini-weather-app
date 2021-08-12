import { META_WEATHER } from 'constants/constants';

describe('test all utils', () => {
  test('should handle getBackground', () => {
    const getBackgroundMock = jest
      .fn()
      .mockImplementation((abbr) => `${META_WEATHER.IMG_URL}/${abbr}.svg`);
    const a = getBackgroundMock('hc');
    expect(a).toEqual('https://www.metaweather.com/static/img/weather/hc.svg');
  });
  test('should handle parse integer', () => {
    const parseIntegerMock = jest.fn().mockImplementation((value) => Math.round(value));
    const a = parseIntegerMock(5.11);
    expect(a).toEqual(5);
  });
  test('should handle parse number fixed one', () => {
    const parseNumberFixedOneMock = jest.fn().mockImplementation((value) => value.toFixed(1));
    const a = parseNumberFixedOneMock(5.11444);
    expect(a).toEqual('5.1');
  });
  test('should handle convertDate', () => {
    const convertDateMock = jest
      .fn()
      .mockImplementation((date) =>
        new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })
      );
    const a = convertDateMock('2021-08-12');
    expect(a).toEqual('August 12');
  });
  test('should handle convertTime', () => {
    const convertTimeMock = jest
      .fn()
      .mockImplementation((time) =>
        new Date(time).toLocaleString('en-US', { hour: 'numeric', hour12: true })
      );
    const a = convertTimeMock('2021-08-12T05:41:28.004903+01:00');
    expect(a).toEqual('11 AM');
  });
  test('should handle convertDateAndTime', () => {
    const convertTimeMock = jest.fn().mockImplementation((time) =>
      new Date(time).toLocaleDateString('en-US', {
        weekday: 'short',
        day: 'numeric',
        year: 'numeric',
        month: 'long',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      })
    );
    const a = convertTimeMock('2021-08-12T05:41:28.004903+01:00');
    expect(a).toEqual('Thu, August 12, 2021, 11:41:28 AM');
  });
});
