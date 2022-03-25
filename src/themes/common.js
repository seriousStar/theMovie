import {StyleSheet} from 'react-native';
import Colors from './Colors';
import Metrics from './Metrics';

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
