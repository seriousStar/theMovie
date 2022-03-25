import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Routing from './routing';

class App extends Component {
  constructor(props) {
    super(props);
    StatusBar.setBarStyle('light-content');
  }

  render() {
    return (
      <SafeAreaProvider>
        <Routing />
      </SafeAreaProvider>
    );
  }
}

export default App;
