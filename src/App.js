import React, {Component} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Routing from './routing';

class App extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <Routing />
      </SafeAreaProvider>
    );
  }
}

export default App;
