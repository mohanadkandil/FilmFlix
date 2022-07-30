import React from 'react';
import { Grid } from '@mui/material';
import useStyles from './styles';
import { Movie } from '../Movie/Movie';

export const MovieList = ({ movies }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.movieContainer}>
      {movies.results.map((movie, index) => (
        <Movie key={index} movie={movie} i={index} />
      ))}
    </Grid>
  );
};
