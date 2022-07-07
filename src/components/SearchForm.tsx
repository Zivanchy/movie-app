import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getMovies } from '../functions/getMovies';
import { useMovieContext } from '../context/movieContext';
import { StateActions } from '../context/movieActions';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export interface InputValues {
  movieName: string;
  movieYear: string;
}

const SearchForm: React.FC = () => {
  const [movie, setMovie] = useState<any>(null);
  const [values, setValues] = useState<InputValues>({
    movieName: '',
    movieYear: '',
  });

  const navigate = useNavigate();

  const { dispatch } = useMovieContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const movie = await getMovies(values);
    setMovie(movie);
    dispatch({
      type: StateActions.GET_MOVIE,
      payload: {
        movie: movie,
      },
    });
    navigate('/moviePage');
    setValues({
      movieName: '',
      movieYear: '',
    });
  };

  return (
    <Form className="container w-50 border border-rounded border-secondary m-5 p-5">
      <h1 className="text-light m-2 mb-5">Search for a movie</h1>
      <Form.Group className="m-2 mb-3">
        <Form.Control
          type="text"
          placeholder="Enter full movie name..."
          onChange={handleChange}
          name="movieName"
        />
      </Form.Group>

      <Form.Group className="m-2 mb-5">
        <Form.Control
          type="text"
          placeholder="Enter year of release..."
          onChange={handleChange}
          name="movieYear"
        />
      </Form.Group>
      <Button className="btn-primary m-2" type="submit" onClick={handleSubmit}>
        Search
      </Button>
    </Form>
  );
};

export default SearchForm;
