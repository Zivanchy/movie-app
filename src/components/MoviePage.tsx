import { useMovieContext } from '../context/movieContext';
import { Link } from 'react-router-dom';
import MovieData from './MovieData';
import MovieRating from './MovieRating';

import { Alert, Image, Button, Container } from 'react-bootstrap';

type Rating = {
  Source: string;
  Value: string;
};

const MoviePage = () => {
  const { movie, error } = useMovieContext();

  if (error) {
    return (
      <Alert className="d-flex flex-nowrap mt-5 mx-auto w-50" variant="warning">
        <Alert.Heading className="ms-3">{error.Error}</Alert.Heading>
        <Button variant="success" className="ms-5">
          <Link
            to="/"
            className="text-light"
            style={{ textDecoration: 'none' }}
          >
            Go back
          </Link>
        </Button>
      </Alert>
    );
  }

  return (
    <div className="mt-5 w-100 h-75 d-flex flex-column align-items-center">
      <Container className="d-flex align-items-center justify-content-around">
        <Image fluid rounded src={movie.Poster} alt="Movie image"></Image>

        <Container className="list-group list-group-flush">
          <MovieData title={'Title'} data={movie.Title} />
          <MovieData title={'Actors'} data={movie.Actors} />
          <MovieData title={'Director'} data={movie.Director} />
          <MovieData title={'Genre'} data={movie.Genre} />
          <MovieData title={'Released'} data={movie.Released} />
          <MovieData title={'Rating'} data={movie.Rated} />
          <MovieData title={'Plot'} data={movie.Plot} />
        </Container>
      </Container>

      <Container
        as="ul"
        className="mt-5 list-group d-flex flex-row align-self-start"
      >
        {movie.Ratings.map((rating: Rating, index: number) => (
          <MovieRating
            source={rating.Source}
            value={rating.Value}
            key={index}
          />
        ))}
      </Container>
    </div>
  );
};

export default MoviePage;
