import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  NOTE_UPDATE,
  NOTE_CREATE,
  NOTES_FETCH_SUCCESS,
  NOTE_SAVE_SUCCESS
} from '../constants/action-types';

export const noteUpdate = ({ prop, value }) => {
  return {
    type: NOTE_UPDATE,
    payload: { prop, value }
  };
};

export const noteCreate = ({ name, task, day }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/notes`)
      .push({ name, task, day })
      .then(() => {
        dispatch({ type: NOTE_CREATE });
        Actions.noteList({ type: 'reset' });
      });
  };
};

export const notesFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/notes`)
      .on('value', (snapshot) => {
        dispatch({ type: NOTES_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const noteSave = ({ name, task, day, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/notes/${uid}`)
      .set({ name, task, day })
      .then(() => {
        dispatch({ type: NOTE_SAVE_SUCCESS });
        Actions.noteList({ type: 'reset' });
      });
  };
};

export const noteDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/notes/${uid}`)
      .remove()
      .then(() => {
        Actions.noteList({ type: 'reset' });
      });
  };
};

