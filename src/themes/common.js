import {StyleSheet} from 'react-native';
import Colors from './colors';
import Metrics from './metrics';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: Metrics.space.sm,
  },
  headerStyle: {
    backgroundColor: Colors.background,
  },
  headerTitleStyle: {
    color: Colors.primary,
  },
  rowContainer: {
    flexDirection: 'row',
  },
});
