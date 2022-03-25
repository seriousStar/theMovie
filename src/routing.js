import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home, Details} from './screens';

const MainStack = createNativeStackNavigator();

const Routing = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name="Home" component={Home} />
        <MainStack.Screen name="Details" component={Details} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default Routing;
