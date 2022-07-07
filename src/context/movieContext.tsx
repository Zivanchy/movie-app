import { createContext, useReducer, useContext } from 'react';
import { MovieReducer } from './movieReducers';

type Children = {
  children: JSX.Element;
};

interface InitialState {
  movie: any;
}

const MovieContext = createContext<any | null>({
  movie: {},
});

export const MovieProvider = ({ children }: Children) => {
  const initialState: InitialState = {
    movie: {},
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
