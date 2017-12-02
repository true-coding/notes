/**
 * @flow
 */
import React, { Component } from 'react';
import {
  View
} from 'react-native';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

export default class App extends Component<{}> {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDmS-TtN0bEjZH_OL1gVmFg8xcETxk1lxY',
      authDomain: 'notes-6a0f0.firebaseapp.com',
      databaseURL: 'https://notes-6a0f0.firebaseio.com',
      projectId: 'notes-6a0f0',
      storageBucket: 'notes-6a0f0.appspot.com',
      messagingSenderId: '459201907872'
    };
    firebase.initializeApp(config);

  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router/>
      </Provider>
    );
  }
}

