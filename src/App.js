/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import AppContainer from './navigation'
import auth from './services/authService'
import {Provider} from 'react-redux'
import store from './redux/store'

console.disableYellowBox=true

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />

    </Provider>
  );
};


export default App;
