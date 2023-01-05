import React, { useState } from 'react';
import { Box } from '@mui/material';
import { HeroBanner, Navbar, SearchExercises, Exercises, Footer } from '../../components';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box className='home'>
      <Navbar />
      <HeroBanner />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
      <Footer />
    </Box>
  );
};

export default Home;
