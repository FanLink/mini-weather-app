import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import WeatherFeature from 'features/weather';
import { Header } from 'components/Common';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
    gridTemplateColumns: '1fr',
    gridTemplateAreas: `"header" "main"`,

    minHeight: '100vh',
  },
  header: {
    gridArea: 'header',
  },
  main: {
    gridArea: 'main',
    padding: theme.spacing(2, 4),
  },
}));
function App() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <Header />
      </Box>
      <Box className={classes.main}>
        <WeatherFeature />
      </Box>
    </Box>
  );
}

export default App;
