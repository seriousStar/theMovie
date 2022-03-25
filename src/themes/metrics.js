import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default {
  width,
  height,
  space: {
    xs: 5,
    sm: 10,
    md: 15,
    lg: 20,
    xl: 30,
    xxl: 40,
    hd: 50,
    fhd: 100,
  },
};
