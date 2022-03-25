import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';
import {MOVIES} from './dummyData';

class HomeScreen extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{color: 'black'}}>Home Screen</Text>
        </View>
        <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
