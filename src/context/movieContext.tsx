import { createContext, useReducer, useContext } from 'react';
import { MovieReducer } from './movieReducers';

type Children = {
  children: JSX.Element;
};

interface InitialState {
  movie: any;
  error: any;
}

const MovieContext = createContext<any | null>({
  movie: null,
  error: null,
});

export const MovieProvider = ({ children }: Children) => {
  const initialState: InitialState = {
    movie: null,
    error: null,
  };
  const [state, dispatch] = useReducer(MovieReducer, initialState);

  return (
    <MovieContext.Provider value={{ ...state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => {
  return useContext(MovieContext);
};
