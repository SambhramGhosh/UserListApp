import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserListScreen } from '../screens/UserListScreen';
import { UserDetailScreen } from '../screens/UserDetailScreen';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Users" component={UserListScreen} />
      <Stack.Screen name="Detail" component={UserDetailScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
