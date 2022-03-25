import React, {Component} from 'react';
import {View, Text, Image, ScrollView, Linking} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';
import {CommonStyle} from '../../themes';
import {convertStrToDate} from '../../utils';

class DetailsScreen extends Component {
  state = {
    selectedMovie: {},
  };
  componentDidMount() {
    const {route} = this.props;
    this.setState({selectedMovie: route.params.data});
  }

  goToDetails = () => {
    Linking.canOpenURL('https://www.disneyplus.com/movies/turning-red/4mFPCXJi7N2m').then(supported => {
      if (supported) {
        Linking.openURL('https://www.disneyplus.com/movies/turning-red/4mFPCXJi7N2m');
      } else {
        console.log(`Don't know how to open URI: `);
      }
    });
  };
  render() {
    const {selectedMovie} = this.state;

    return (
      <SafeAreaView style={CommonStyle.container} edges={['right', 'bottom', 'left']}>
        <ScrollView>
          <Image
            source={{uri: `https://image.tmdb.org/t/p/w500${selectedMovie.poster_path || selectedMovie.backdrop_path}`}}
            style={styles.itemImg}
          />
          <View style={styles.mainContainer}>
            <Text style={styles.titleText}>{selectedMovie.title}</Text>
            <Text style={styles.descriptionText}>{selectedMovie.overview}</Text>
            <View style={[CommonStyle.rowContainer, styles.descriptionContainer]}>
              <Text style={styles.descriptionBoldText}>Popularity: </Text>
              <Text style={styles.descriptionText}>{selectedMovie.popularity}</Text>
            </View>
            <View style={[CommonStyle.rowContainer, styles.descriptionContainer]}>
              <Text style={styles.descriptionBoldText}>Release Date: </Text>
              <Text style={styles.descriptionText}>{convertStrToDate(selectedMovie.release_date)}</Text>
            </View>
            <View style={[CommonStyle.rowContainer, styles.descriptionContainer]}>
              <Text style={styles.descriptionBoldText}>Runtime: </Text>
              <Text style={styles.descriptionText}>100 min</Text>
            </View>
            <View style={[CommonStyle.rowContainer, styles.descriptionContainer]}>
              <Text style={styles.descriptionBoldText} onPress={this.goToDetails}>
                More Details? Go to Homepage
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default DetailsScreen;
