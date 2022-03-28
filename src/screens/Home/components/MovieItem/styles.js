import {StyleSheet} from 'react-native';
import {Colors, Metrics, Fonts} from '../../../../themes';

export const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    minHeight: 110,
    alignItems: 'center',
    marginHorizontal: Metrics.space.sm,
    paddingHorizontal: Metrics.space.sm,
    backgroundColor: Colors.blue['space'],
    borderRadius: 5,
    padding: 5,
  },
  itemSubContainer: {
    marginLeft: Metrics.space.sm,
    flex: 1,
  },
  itemImg: {
    width: 110,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  titleText: {
    fontSize: Fonts.size.regular,
    fontWeight: '600',
    color: Colors.primary,
  },
  grayText: {
    color: Colors.secondary,
    fontWeight: '500',
    fontSize: Fonts.size.medium,
  },
  genresContainer: {
    marginBottom: Metrics.space.sm,
  },
});
