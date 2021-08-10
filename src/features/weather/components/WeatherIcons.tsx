import { Box } from '@material-ui/core';
import * as React from 'react';
import { getBackground } from 'utils';

export interface WeatherIconsProps {
  weatherStateAbbr: string;
}


export default function WeatherIcons({ weatherStateAbbr }: WeatherIconsProps) {
  const imgUrl = `url(${getBackground(weatherStateAbbr)})`;
  return (
    <Box
      id={`the-${weatherStateAbbr}-icon`}
      style={{
        minWidth: 40,
        minHeight: 40,
        backgroundImage: imgUrl,
      }}
    ></Box>
  );
}
