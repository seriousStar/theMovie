import React, {Component} from 'react';
import {View, Text, Image, ScrollView, Linking} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {connect} from 'react-redux';
import _ from 'lodash';

import {styles} from './styles';
import {Colors, CommonStyle} from '../../themes';
import {convertStrToDate, getImageUrl} from '../../utils';
import {getMovieDetail} from '../../redux/actions';
import {Indicator, Genres} from '../../components';

class DetailsScreen extends Component {
  state = {
    selectedMovie: {},
  };
  componentDidMount() {
    this.onInitial();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (!_.isEqual(this.props.movie.detail, prevProps.movie.detail)) {
      this.setState({selectedMovie: this.props.movie.detail});
    }
  }

  onInitial = async () => {
    const {route} = this.props;
    await this.props.getMovieDetail(route.params.data.id);
  };

  goToDetails = () => {
    const {selectedMovie} = this.state;
    if (selectedMovie.homepage) {
      Linking.canOpenURL(selectedMovie.homepage).then(supported => {
        if (supported) {
          Linking.openURL(selectedMovie.homepage);
        } else {
          console.log(`Don't know how to open URI: ${selectedMovie.homepage}`);
        }
      });
    }
  };
  render() {
    const {selectedMovie} = this.state;
    const {isFetching, configuration} = this.props;
    const genreNames = (selectedMovie?.genres || []).map(genre => genre.name);

    return (
      <SafeAreaView style={CommonStyle.container} edges={['right', 'bottom', 'left']}>
        {!isFetching && (
          <ScrollView>
            <Image
              source={{
                uri: getImageUrl(configuration.images, selectedMovie.poster_path || selectedMovie.backdrop_path, false),
              }}
              style={styles.itemImg}
            />
            <View style={styles.mainContainer}>
              {!!selectedMovie.title && <Text style={styles.titleText}>{selectedMovie.title}</Text>}
              {!!genreNames && (
                <Genres names={genreNames} tagColor={Colors.blue.space} style={styles.genresContainer} />
              )}
              {!!selectedMovie.overview && <Text style={styles.descriptionText}>{selectedMovie.overview}</Text>}
              {!!selectedMovie.popularity && (
                <View style={[CommonStyle.rowContainer, styles.descriptionContainer]}>
                  <Text style={styles.descriptionBoldText}>Popularity: </Text>
                  <Text style={styles.descriptionText}>{selectedMovie.popularity}</Text>
                </View>
              )}
              {!!selectedMovie.release_date && (
                <View style={[CommonStyle.rowContainer, styles.descriptionContainer]}>
                  <Text style={styles.descriptionBoldText}>Release Date: </Text>
                  <Text style={styles.descriptionText}>{convertStrToDate(selectedMovie.release_date)}</Text>
                </View>
              )}
              {!!selectedMovie.runtime && (
                <View style={[CommonStyle.rowContainer, styles.descriptionContainer]}>
                  <Text style={styles.descriptionBoldText}>Runtime: </Text>
                  <Text style={styles.descriptionText}>{`${selectedMovie.runtime} min`}</Text>
                </View>
              )}
              {!!selectedMovie.homepage && (
                <View style={[CommonStyle.rowContainer, styles.descriptionContainer]}>
                  <Text style={styles.descriptionBoldText} onPress={this.goToDetails}>
                    More Details? Go to Homepage
                  </Text>
                </View>
              )}
            </View>
          </ScrollView>
        )}
        {isFetching && <Indicator />}
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  movie: state.movie,
  configuration: state.configuration,
  isFetching: state.movie.isFetching,
});

export default connect(mapStateToProps, {getMovieDetail})(DetailsScreen);
