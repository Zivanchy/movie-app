import axios from 'axios';

import { InputValues } from '../components/SearchForm';

export const getMovies = async (parameters: InputValues) => {
  const movieName = parameters.movieName.replace(' ', '+');
  const movieYear = parameters.movieYear;

  if (!movieYear) {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?t=${movieName}&apikey=f39d68f4`
      );
      const movie = await response.data;
      return movie;
    } catch (error) {
      console.log(error);
    }
  }

  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?t=${movieName}&y=${movieYear}&apikey=f39d68f4`
    );
    const movie = await response.data;
    return movie;
  } catch (error) {
    console.log(error);
  }
};
