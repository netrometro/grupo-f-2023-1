import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screen/home/Home';
import { DonateArea } from '../screen/donateItens/DonateArea';
import { Inicial } from '../screen/initialscreen/Inicial';
import { Login } from '../screen/login/Login';
import { SignIn } from '../screen/signin/SignIn';
import TabComponent from './Navigation.tab';

const Stack = createNativeStackNavigator()

export default function StackComponent() {
  return (
      <Stack.Navigator initialRouteName='Inicial'> 
          <Stack.Screen name='Tela Inicial' component={Inicial}></Stack.Screen>
          <Stack.Screen name='LogIn' component={Login}></Stack.Screen>
          <Stack.Screen name='SignIn' component={SignIn}></Stack.Screen>
          <Stack.Screen name='Home' component={TabComponent}></Stack.Screen> 

      </Stack.Navigator>    
   
  );
}