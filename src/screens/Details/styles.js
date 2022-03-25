import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../themes';

export const styles = StyleSheet.create({
  itemImg: {
    height: Metrics.height / 3,
    resizeMode: 'cover',
    marginHorizontal: Metrics.space.sm,
    borderRadius: 5,
  },
  mainContainer: {
    marginTop: Metrics.space.sm,
    marginHorizontal: Metrics.space.sm,
  },
  titleText: {
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: Fonts.size.h7,
    marginBottom: Metrics.space.md,
  },
  descriptionText: {
    color: Colors.secondary,
    fontSize: Fonts.size.medium,
  },
  descriptionBoldText: {
    color: Colors.primary,
    fontSize: Fonts.size.medium,
    fontWeight: 'bold',
  },
  descriptionContainer: {
    marginTop: Metrics.space.sm,
  },
});
