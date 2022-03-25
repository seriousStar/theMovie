import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';

class DetailsScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Details Screen</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default DetailsScreen;
