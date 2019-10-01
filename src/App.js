/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { Linking, Alert } from 'react-native';
import React from 'react';
import AppContainer from './navigation'
import {Provider} from 'react-redux'
import store from './redux/store'
import sandbox from './sandbox'

console.disableYellowBox=true

class App extends React.Component {
  

  render(){
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
  
};


export default App;
