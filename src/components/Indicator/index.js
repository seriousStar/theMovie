import React, {Component} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {Colors} from '../../themes';
import {styles} from './styles';

class Indicator extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'small'} color={Colors.primary} />
      </View>
    );
  }
}

export default Indicator;
