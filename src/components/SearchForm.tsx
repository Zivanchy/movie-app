import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getMovies } from '../functions/getMovies';
import { useMovieContext } from '../context/movieContext';
import { StateActions } from '../context/movieActions';

import { Form, Button, Alert } from 'react-bootstrap';

export interface InputValues {
  movieName: string;
  movieYear: string;
}

const SearchForm: React.FC = () => {
  const [error, setError] = useState<boolean>(false);
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

    if (values.movieName === '') {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
      return;
    }

    const movie = await getMovies(values);
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
      {error && (
        <Alert className="m-2" variant="danger">
          Please enter a movie name.
        </Alert>
      )}
    </Form>
  );
};

export default SearchForm;
