import { Box, Grid, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { LocationOption } from 'models';
import React from 'react';
import { ChangeEvent } from 'react';

export interface WeatherSearchProps {
  options: LocationOption[];
  onSearchChange: (newQuery: string) => void;
  onLocationChange: (option: LocationOption | string) => void;
}

export default function WeatherSearch({
  options,
  onSearchChange,
  onLocationChange,
}: WeatherSearchProps) {
  const handleGetOptionLabel = (option: any) => {
     if(!option) return;
     return option.label;
  }
  const handleOptionChange = (e: ChangeEvent<{}>, option: LocationOption | string) => {
    if (!onLocationChange) return;
    onLocationChange(option);
  };
  const handleInputChange = (event: ChangeEvent<{}>, value: string) => {
    if (!onSearchChange) return;
    onSearchChange(value);
  };
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} style={{margin: 'auto'}}>
          <Autocomplete
            id="auto-suggest-location"
            onInputChange = {handleInputChange}
            blurOnSelect
            freeSolo
            disableClearable
            options={options || [{label:'a', value: 1}]}
            getOptionLabel = {handleGetOptionLabel}
            onChange={handleOptionChange}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search Weather By City"
                margin="normal"
                variant="standard"
                InputProps={{ ...params.InputProps, type: 'search' }}
              />
            )}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
