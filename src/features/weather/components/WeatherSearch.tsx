import { Box, Grid, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { LocationOption } from 'models';
import React from 'react';
import { ChangeEvent } from 'react';

export interface WeatherSearchProps {
  loading: boolean;
  options: LocationOption[];
  onSearchChange: (newQuery: string) => void;
  onLocationChange: (option: LocationOption) => void;
}

export default function WeatherSearch({
  loading,
  options,
  onSearchChange,
  onLocationChange,
}: WeatherSearchProps) {
  const handleGetOptionLabel = (option: any) => {
    if (!option) return;
    return option.label;
  };
  const handleOptionChange = (e: ChangeEvent<{}>, option: LocationOption) => {
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
        <Grid item xs={12} md={6} style={{ margin: 'auto' }}>
          <Autocomplete
            id="auto-suggest-location"
            loading={loading}
            onInputChange={handleInputChange}
            disableClearable
            options={options}
            getOptionLabel={handleGetOptionLabel}
            onChange={handleOptionChange}
            // beacause LocationOptions always changes, so I disabled check getOptionSelected
            getOptionSelected={(option, value) => true} 
            noOptionsText="No Cities"
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search Weather By City"
                margin="normal"
                variant="outlined"
                InputProps={{ ...params.InputProps, type: 'search' }}
              />
            )}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
