import React, {Component} from 'react';
import {View, FlatList, Image} from 'react-native';
import {connect} from 'react-redux';
import _ from 'lodash';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';
import MovieItem from './components/MovieItem';
import MovieListFooter from './components/MovieListFooter';
import {CommonStyle} from '../../themes';
import {ConfigureAPIs} from '../../services';
import {getMostPopularMovies, getMostPopularLoadMore, getConfiguration} from '../../redux/actions';

import {Indicator} from '../../components';

class HomeScreen extends Component {
  state = {
    popularMovies: [],
  };

  componentDidMount() {
    this.onInitial();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (!_.isEqual(this.props.movies.popularMovies, prevProps.movies.popularMovies)) {
      this.setState({popularMovies: this.props.movies.popularMovies});
    }
  }

  onInitial = async () => {
    await this.props.getMostPopularMovies();
    await this.props.getConfiguration();
  };

  onPressMovieItem = data => {
    this.props.navigation.navigate({name: 'Details', params: {data}});
  };

  onLoadMore = () => {
    const {activePage} = this.props;
    this.props.getMostPopularLoadMore(activePage + 1);
  };

  renderMovieItem = ({item, index}) => {
    const {configuration} = this.props;
    return (
      <MovieItem
        data={item}
        onPressItem={this.onPressMovieItem}
        genresConfig={configuration.genres}
        imgConfig={configuration.images}
      />
    );
  };

  renderFooter = () => {
    const {isMovieFetching, activePage} = this.props;
    return <MovieListFooter onLoadMore={this.onLoadMore} isLoading={isMovieFetching && activePage !== 0} />;
  };

  renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  render() {
    const {popularMovies} = this.state;
    const {isMovieFetching, activePage, isConfigureFetching} = this.props;
    return (
      <SafeAreaView style={CommonStyle.container} edges={['right', 'bottom', 'left']}>
        {!((isMovieFetching && activePage === 0) || isConfigureFetching) && (
          <FlatList
            data={popularMovies}
            keyExtractor={(item, index) => `key-${item.id}-${index}`}
            renderItem={this.renderMovieItem}
            ItemSeparatorComponent={this.renderSeparator}
            ListFooterComponent={this.renderFooter}
          />
        )}
        {((isMovieFetching && activePage === 0) || isConfigureFetching) && <Indicator />}
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies,
  configuration: state.configuration,
  activePage: state.movies.activePage,
  isMovieFetching: state.movies.isFetching,
  isConfigureFetching: state.configuration.isFetching,
});

export default connect(mapStateToProps, {getMostPopularMovies, getMostPopularLoadMore, getConfiguration})(HomeScreen);
