import React, {Component} from 'react';
import {TouchableOpacity, Image, View, Text} from 'react-native';

import {styles} from './styles';
import {convertStrToDate} from '../../utils';

class MovieItem extends Component {
  render() {
    const {data, onPressItem} = this.props;
    return (
      <TouchableOpacity style={styles.itemContainer} onPress={() => onPressItem(data)}>
        <Image source={{uri: `https://image.tmdb.org/t/p/w185${data.poster_path || data.backdrop_path}`}} style={styles.itemImg} />
        <View style={styles.itemSubContainer}>
          <Text style={styles.titleText} numberOfLines={1}>
            {data.title}
          </Text>
          <Text style={styles.grayText}>Popularity: {data.popularity}</Text>
          <Text style={styles.grayText}>Release Date: {convertStrToDate(data.release_date)}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
export default MovieItem;
