import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screen/home/Home';
import { DonateArea } from '../screen/donateItens/DonateArea';
import { Inicial } from '../screen/initialscreen/Inicial';

const Stack = createNativeStackNavigator()

export default function StackComponent() {
  return (
    <NavigationContainer>
       {/* Define o navegador com a tela inicial 'Home'. Trocar depois para o fuxo que está no figma*/}
      <Stack.Navigator initialRouteName='Inicial'> 
          <Stack.Screen name='Inical' component={Inicial}></Stack.Screen>
          <Stack.Screen name='Home' component={Home}></Stack.Screen>
          <Stack.Screen name='Donation' component={DonateArea}></Stack.Screen>
      </Stack.Navigator>      
    </NavigationContainer>
  );
}