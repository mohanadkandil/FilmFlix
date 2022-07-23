import React from 'react';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import { Movies, MovieInformation, Profile, NavBar, Actors } from './index';

const App = () => (
  <div>
    <CssBaseline />
    <NavBar />
    <main>
      <Routes>
        <Route exact path="/movies/:id" element={<MovieInformation />} />
        <Route exact path="/actors/:id" element={<Actors />} />
        <Route exact path="/" element={<Profile />} />
        <Route exact path="/movies" element={<Movies />} />
        <Route exact path="/profile/:id" element={<Profile />} />
      </Routes>
    </main>
  </div>
);

export default App;
