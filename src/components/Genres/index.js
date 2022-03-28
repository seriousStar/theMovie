import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Colors} from '../../themes';
import {styles} from './styles';

class Genres extends Component {
  render() {
    const {names, style, tagColor} = this.props;

    return (
      <View style={[styles.genresContainer, style]}>
        {names.map((genre, index) => (
          <View
            style={[styles.genreContainer, {backgroundColor: tagColor || Colors.background}]}
            key={`key-${genre}-${index}`}>
            <Text style={styles.primaryText}>{genre}</Text>
          </View>
        ))}
      </View>
    );
  }
}

export default Genres;
