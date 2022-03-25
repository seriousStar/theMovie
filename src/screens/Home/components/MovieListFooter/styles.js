import {StyleSheet} from 'react-native';
import {Colors, Metrics, Fonts} from '../../../../themes';

export const styles = StyleSheet.create({
  footer: {
    padding: Metrics.space.sm,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  loadMoreBtn: {
    padding: Metrics.space.sm,
    backgroundColor: Colors.blue.space,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: Colors.primary,
    fontSize: Fonts.size.regular,
    textAlign: 'center',
  },
});
