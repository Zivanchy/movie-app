import { StateActions } from './movieActions';

interface Action {
  type: StateActions;
  payload: any;
}

export const MovieReducer = (state: any, action: Action) => {
  switch (action.type) {
    case StateActions.GET_MOVIE:
      return {
        ...state,
        movie: action.payload.movie,
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
