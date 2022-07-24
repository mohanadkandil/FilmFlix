import { Box, CircularProgress, Typography, useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetMoviesQuery } from '../../services/TMDB';

export const Movies = () => {
  const { data } = useGetMoviesQuery();
  console.log('🚀 ~ file: Movies.jsx ~ line 8 ~ Movies ~ data', data);
};
