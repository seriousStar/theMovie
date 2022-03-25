import React, {Component} from 'react';
import {View, FlatList, Image} from 'react-native';
import {connect} from 'react-redux';
import _ from 'lodash';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';
import MovieItem from './components/MovieItem';
import MovieListFooter from './components/MovieListFooter';
import {CommonStyle} from '../../themes';
import {getMostPopularMovies, getMostPopularLoadMore} from '../../redux/actions';

import {Indicator} from '../../components';

class HomeScreen extends Component {
  state = {
    popularMovies: [],
  };

  componentDidMount() {
    this.props.getMostPopularMovies();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (!_.isEqual(this.props.movies.popularMovies, prevProps.movies.popularMovies)) {
      this.setState({popularMovies: this.props.movies.popularMovies});
    }
  }

  onPressMovieItem = data => {
    this.props.navigation.navigate({name: 'Details', params: {data}});
  };

  onLoadMore = () => {
    const {activePage} = this.props;
    this.props.getMostPopularLoadMore(activePage + 1);
  };

  renderMovieItem = ({item, index}) => {
    return <MovieItem data={item} onPressItem={this.onPressMovieItem} />;
  };

  renderFooter = () => {
    const {isFetching, activePage} = this.props;
    return <MovieListFooter onLoadMore={this.onLoadMore} isLoading={isFetching && activePage !== 0} />;
  };

  renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  render() {
    const {popularMovies} = this.state;
    const {isFetching, activePage} = this.props;
    console.info(activePage);
    return (
      <SafeAreaView style={CommonStyle.container} edges={['right', 'bottom', 'left']}>
        {!(isFetching && activePage === 0) && (
          <FlatList
            data={popularMovies}
            keyExtractor={(item, index) => `key-${item.id}-${index}`}
            renderItem={this.renderMovieItem}
            ItemSeparatorComponent={this.renderSeparator}
            ListFooterComponent={this.renderFooter}
          />
        )}
        {isFetching && activePage === 0 && <Indicator />}
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies,
  activePage: state.movies.activePage,
  isFetching: state.movies.isFetching || state.movies.isFetching,
});

export default connect(mapStateToProps, {getMostPopularMovies, getMostPopularLoadMore})(HomeScreen);
