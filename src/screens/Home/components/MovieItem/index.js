import React, {Component} from 'react';
import {TouchableOpacity, Image, View, Text} from 'react-native';

import {styles} from './styles';
import {Genres} from '../../../../components';
import {convertStrToDate, getImageUrl, getGenreNames} from '../../../../utils';

class MovieItem extends Component {
  render() {
    const {data, onPressItem, genresConfig, imgConfig} = this.props;
    const genreNames = getGenreNames(genresConfig, data.genre_ids);
    return (
      <TouchableOpacity style={styles.itemContainer} onPress={() => onPressItem(data)}>
        <Image
          source={{uri: getImageUrl(imgConfig, data.poster_path || data.backdrop_path, true)}}
          style={styles.itemImg}
        />
        <View style={styles.itemSubContainer}>
          <Text style={styles.titleText} numberOfLines={1}>
            {data.title}
          </Text>
          <Genres names={genreNames} style={styles.genresContainer} />

          <Text style={styles.grayText}>Popularity: {data.popularity}</Text>
          <Text style={styles.grayText}>Release Date: {convertStrToDate(data.release_date)}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
export default MovieItem;
