import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home/Home';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';

export type stackParam = {
  Home: undefined;
  Login: undefined;
  SignUp: undefined;
};

const stack = createNativeStackNavigator<stackParam>();

interface Props {
  name: string;
  component: any;
}

const AppNavigator: React.FC<Props> = () => {
  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="SignUp">
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="Login" component={Login} />
        <stack.Screen name="SignUp" component={SignUp} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
