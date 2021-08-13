import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { Spinner } from 'components/Common';
import {
  locationActions,
  selectLocationLoading,
  selectLocationOptions,
} from 'features/location/locationSlice';
import { LocationOption } from 'models';
import React from 'react';
import WeatherSearch from './components/WeatherSearch';
import WeatherStatistics from './components/WeatherStatistics';
import { WeatherWidget } from './components/WeatherWidget';
import {
  selectGeneralWeatherInfo,
  selectWeatherLoading,
  selectWeatherSixDaysInfo,
  weatherActions,
} from './weatherSlice';

const useStyles = makeStyles((theme) => ({
  widgetContain: {
    backgroundColor: '#7FDBFF',
    width: '100%',
    minHeight: '75vh',
  },
}));
export default function WeatherFeature() {
  const locationLoading = useAppSelector(selectLocationLoading);
  const locationOptions = useAppSelector(selectLocationOptions);
  const weatherSixDays = useAppSelector(selectWeatherSixDaysInfo);
  const generalWeatherInfo = useAppSelector(selectGeneralWeatherInfo);
  const weatherLoading = useAppSelector(selectWeatherLoading);
  const dispatch = useAppDispatch();

  // Callback fired when the input value changes.
  const handleSearchChange = (newQuery: string) => {
    dispatch(locationActions.getLocation(newQuery));
  };
  // Callback fired when the option changes.
  const handleLocationChange = (option: LocationOption | string) => {
    if (typeof option !== 'string') {
      dispatch(weatherActions.getWeatherByLocationId(option.value));
    }
  };
  const classes = useStyles();
  return (
    <Box mb={3}>
      {/* search  */}
      <WeatherSearch
        loading={locationLoading}
        options={locationOptions}
        onSearchChange={handleSearchChange}
        onLocationChange={handleLocationChange}
      />
      {/* loading */}
      {weatherLoading && <Spinner />}
      {/* weather details */}
      {weatherSixDays.length > 0 && !weatherLoading && (
        <Box mb={3} padding={4} mt={4} className={classes.widgetContain}>
          <Typography variant="h4" color="textSecondary">
            Location:
          </Typography>
          {/* General Weather Info */}
          {generalWeatherInfo && (
            <Box mt={4}>
              <WeatherStatistics
                title={generalWeatherInfo.title}
                time={generalWeatherInfo.time}
                timeZone={generalWeatherInfo.timezone}
                sunrise={generalWeatherInfo.sun_rise}
                sunset={generalWeatherInfo.sun_set}
              />
            </Box>
          )}
          <Box mt={5}>
            <Typography variant="h4" color="textSecondary">
              Daily:
            </Typography>
            {/* show weather 6 days */}
            <Box mt={2}>
              <Grid container spacing={3}>
                {weatherSixDays?.map((weather) => (
                  <Grid key={weather.id} item xs={12} sm={6} md={4} lg={2}>
                    <WeatherWidget
                      confidence={weather.predictability}
                      pressure={weather.air_pressure}
                      visibility={weather.visibility}
                      humidity={weather.humidity}
                      date={weather.applicable_date}
                      weatherStateAbbr={weather.weather_state_abbr}
                      weatherState={weather.weather_state_name}
                      temp={weather.the_temp}
                      minTemp={weather.min_temp}
                      maxTemp={weather.max_temp}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}
