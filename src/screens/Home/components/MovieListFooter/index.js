import React, {Component} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {Indicator} from '../../../../components';
import {styles} from './styles';

class MovieListFooter extends Component {
  render() {
    const {onLoadMore, isLoading} = this.props;
    return (
      <View style={styles.footer}>
        <TouchableOpacity onPress={onLoadMore} style={styles.loadMoreBtn}>
          {!isLoading && <Text style={styles.btnText}>Load More</Text>}
          {isLoading && <Indicator />}
        </TouchableOpacity>
      </View>
    );
  }
}

export default MovieListFooter;
