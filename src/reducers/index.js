import { combineReducers } from 'redux';
import auth from './AuthReducer';
import noteForm from './NoteFormReducer';
import app from './app';
import notes from './NoteReducer';


export default combineReducers({
  app,
  auth,
  noteForm,
  notes
});
