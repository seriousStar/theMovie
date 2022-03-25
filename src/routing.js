import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home, Details} from './screens';
import {CommonStyle} from './themes';

const MainStack = createNativeStackNavigator();

const options = {
  headerStyle: CommonStyle.headerStyle,
  headerTitleStyle: CommonStyle.headerTitleStyle,
  headerShadowVisible: false,
};

const Routing = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator screenOptions={options}>
        <MainStack.Screen name="Home" component={Home} options={{title: 'Popular Movies'}} />
        <MainStack.Screen name="Details" component={Details} options={{title: 'Movie Details'}} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default Routing;
