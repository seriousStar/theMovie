import {StyleSheet} from 'react-native';
import {Colors, Metrics, Fonts} from '../../themes';

export const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    height: 100,
    alignItems: 'center',
    marginHorizontal: Metrics.space.sm,
    paddingHorizontal: Metrics.space.sm,
    backgroundColor: Colors.blue['space'],
    borderRadius: 5,
  },
  itemSubContainer: {
    marginLeft: Metrics.space.sm,
    flex: 1,
  },
  itemImg: {
    width: 85,
    height: 85,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  titleText: {
    fontSize: Fonts.size.regular,
    fontWeight: '600',
    color: Colors.primary,
    marginBottom: Metrics.space.sm,
  },
  grayText: {
    color: Colors.secondary,
    fontWeight: '500',
    fontSize: Fonts.size.medium,
  },
});
