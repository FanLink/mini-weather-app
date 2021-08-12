import * as React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  })
);

export function Spinner() {
  const classes = useStyles();
  return (
    <Grid id="spinner-component-id" className={classes.root}>
      <Grid item style={{ margin: 'auto' }}>
        <CircularProgress />
      </Grid>
    </Grid>
  );
}
