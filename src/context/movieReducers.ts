import { StateActions } from './movieActions';

interface Action {
  type: StateActions;
  payload: any;
}

export const MovieReducer = (state: any, action: Action) => {
  const { type, payload } = action;
  switch (action.type) {
    case StateActions.GET_MOVIE:
      return {
        ...state,
        movie: action.payload.movie,
      };
  }
};
