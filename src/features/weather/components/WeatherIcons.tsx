import { Box } from '@material-ui/core';
import * as React from 'react';
import { getBackground } from 'utils';

export interface WeatherIconsProps {
  weatherStateAbbr: string;
}

export default function WeatherIcons({ weatherStateAbbr }: WeatherIconsProps) {
  return (
    <Box
      style={{
        minWidth: 40,
        minHeight: 40,
        backgroundImage: `url(${getBackground(weatherStateAbbr)})`,
      }}
    ></Box>
  );
}
