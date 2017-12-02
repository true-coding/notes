import { APP_LOAD } from '../constants/action-types';

const INITIAL_STATE = {
  loaded: false
};

export default function app(state = INITIAL_STATE.loaded, action) {
  switch (action.type) {
    case APP_LOAD:
      return { ...state, loaded: true };
    default:
      return state;
  }
}
