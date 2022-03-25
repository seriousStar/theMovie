import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Routing from './routing';
import store from './redux/store';

class App extends Component {
  constructor(props) {
    super(props);
    StatusBar.setBarStyle('light-content');
  }

  render() {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <Routing />
        </Provider>
      </SafeAreaProvider>
    );
  }
}

export default App;
