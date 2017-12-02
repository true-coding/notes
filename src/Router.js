import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import NoteList from './components/NoteList';
import NoteCreate from './components/NoteCreate';
import NoteEdit from './components/NoteEdit';

const RouterComponent = () => {
  return (
    <Router >
      <Scene key="root" >
        <Scene
          key="login"
          component={LoginForm}
          title="Login"
          initial
        />

        <Scene
          key="noteList"
          component={NoteList}
          title="Notes"
          rightTitle="Add"
          onRight={() => {Actions.noteCreate();}}
        />

        <Scene
          key="noteCreate"
          component={NoteCreate}
          title="Create Note"
        />

        <Scene
          key="noteEdit"
          component={NoteEdit}
          title="Edit Note"
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
