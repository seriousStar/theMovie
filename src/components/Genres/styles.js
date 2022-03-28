import {StyleSheet} from 'react-native';
import {Metrics, Colors, Fonts} from '../../themes';

export const styles = StyleSheet.create({
  genresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
  genreContainer: {
    padding: Metrics.space.xs,
    borderRadius: 5,
    backgroundColor: Colors.background,
    marginRight: Metrics.space.xs,
    marginTop: Metrics.space.xs,
  },
  primaryText: {
    color: Colors.secondary,
    fontWeight: '500',
    fontSize: Fonts.size.medium,
  },
});
