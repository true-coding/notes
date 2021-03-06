import {
  NOTES_FETCH_SUCCESS
} from '../constants/action-types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NOTES_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
