import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screen/home/Home';
import { DonateArea } from '../screen/donateItens/DonateArea';

const Stack = createNativeStackNavigator()

export default function StackComponent() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name='Home' component={Home}></Stack.Screen>
          <Stack.Screen name='Donation' component={DonateArea}></Stack.Screen>
      </Stack.Navigator>      
    </NavigationContainer>
  );
}