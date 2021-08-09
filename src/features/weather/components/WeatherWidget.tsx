import { Box, makeStyles, Paper, Typography } from '@material-ui/core';
import * as React from 'react';
import { convertDate, parseInteger, parseNumberFixedOne } from 'utils';
import WeatherIcons from './WeatherIcons';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
    alignItems: 'center',

    padding: theme.spacing(2),
    border: `1px solid ${theme.palette.divider}`,
    backgroudColor: 'inherit',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',

    marginLeft: theme.spacing(2),
  },
  tempCustom: {
    fontSize: '45px',
    marginTop: '16px',
  },
}));

export interface WeatherWidgetProps {
  weatherStateAbbr: string;
  weatherState: string;
  temp: number;
  minTemp: number;
  maxTemp: number;
  date: string;
  humidity: number;
  visibility: number;
  pressure: number;
  confidence: number;
}
export function WeatherWidget({
  weatherStateAbbr,
  weatherState,
  temp,
  minTemp,
  maxTemp,
  date,
  humidity,
  visibility,
  pressure,
  confidence,
}: WeatherWidgetProps) {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Box className={classes.content}>
        <WeatherIcons weatherStateAbbr={weatherStateAbbr} />
        <Typography color="primary" className={classes.tempCustom}>
          {parseInteger(temp)}°
        </Typography>
      </Box>

      <Box className={classes.content}>
        <Typography color="primary" variant="button">
          {convertDate(date)}
        </Typography>
        <Typography variant="h6">{weatherState}</Typography>
        <Typography variant="caption">Min:{parseInteger(minTemp)}°C</Typography>
        <Typography variant="caption">Max:{parseInteger(maxTemp)}°C</Typography>
        <Typography variant="caption">Humidity:{parseInteger(humidity)}%</Typography>
        <Typography variant="caption">Visibility:{parseNumberFixedOne(visibility)}miles</Typography>
        <Typography variant="caption">Pressure:{pressure}mb</Typography>
        <Typography variant="caption">Confidence:{confidence}%</Typography>
      </Box>
    </Paper>
  );
}
