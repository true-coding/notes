import {
  NOTE_CREATE,
  NOTE_SAVE_SUCCESS,
  NOTE_UPDATE
} from '../constants/action-types';

const INITIAL_STATE = {
  name: '',
  task: '',
  day: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NOTE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case NOTE_CREATE:
      return INITIAL_STATE;
    case NOTE_SAVE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
