import { META_WEATHER } from 'constants/constants';

export const getBackground = (abbr: string) => {
  return `${META_WEATHER.IMG_URL}/${abbr}.svg`;
};
export const parseInteger = (value: number) => {
  return Math.round(value);
};

export const parseNumberFixedOne = (value: number) => {
  return value.toFixed(1);
};

export const convertDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
};
export const convertTime = (time: string) => {
  return new Date(time).toLocaleString('en-US', { hour: 'numeric', hour12: true });
};

export const convertDateAndTime = (value: string) => {
  return new Date(value).toLocaleDateString('en-US', {
    weekday: 'short',
    day: 'numeric',
    year: 'numeric',
    month: 'long',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });
};
