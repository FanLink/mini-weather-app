import { Box, makeStyles, Paper, Typography } from '@material-ui/core';
import * as React from 'react';
import { convertDateAndTime, convertTime,  } from 'utils';

export interface WeatherStatisticsProps {
  title: string;
  time: string;
  timeZone: string;
  sunrise: string;
  sunset: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    letterSpacing: '0.02em',
    textTransform: 'uppercase',
  },
  paperContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    padding: theme.spacing(3),
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',

    padding: theme.spacing(3),
  }
}));

export default function WeatherStatistics({ title, time , timeZone,sunrise, sunset}: WeatherStatisticsProps) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Paper  className= {classes.paperContainer}>
        <Box className={classes.content}>
          <Typography className={classes.title} color="primary" variant="h4">
            {title} City
          </Typography>
          <Typography variant="button"> {convertDateAndTime(time)} </Typography>
          <Typography variant="caption"> Time Zone: {timeZone} </Typography>
        </Box>
        <Box className={classes.content}>
          <Typography variant="h6"> Sunrise: {convertTime(sunrise)} </Typography>
          <Typography variant="h6"> Sunset: {convertTime(sunset)} </Typography>
        </Box>
      </Paper>
 </Box>
  );
}
