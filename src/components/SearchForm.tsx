import axios from 'axios';
import { useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

interface InputValues {
  movieName: string;
  movieYear: string;
}

const SearchForm = () => {
  const [values, setValues] = useState<InputValues>({
    movieName: '',
    movieYear: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('submit');
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
