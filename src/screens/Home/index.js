import React, {Component} from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';
import {MOVIES} from './dummyData';
import Config from '../../config';
import {convertStrToDate} from '../../utils';
import {MovieItem} from '../../components';
import {CommonStyle} from '../../themes';

class HomeScreen extends Component {
  state = {
    popularMovies: [],
  };

  componentDidMount() {
    this.setState({popularMovies: MOVIES.results});
  }

  onPressMovieItem = data => {
    this.props.navigation.navigate({name: 'Details', params: {data}});
  };

  renderMovieItem = ({item, index}) => {
    return <MovieItem data={item} onPressItem={this.onPressMovieItem} />;
  };

  renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  render() {
    const {popularMovies} = this.state;
    return (
      <SafeAreaView style={CommonStyle.container} edges={['right', 'bottom', 'left']}>
        <FlatList
          data={popularMovies}
          keyExtractor={(item, index) => `key-${item.id}-${index}`}
          renderItem={this.renderMovieItem}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
