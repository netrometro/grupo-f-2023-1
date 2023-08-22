import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from '../screen/home/Home';
import { DonateArea } from '../screen/donateItens/DonateArea';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Navegation from '.';
import { MyItens } from '../screen/myItens/MyArea';


const Tab = createBottomTabNavigator()

export default function TabComponent() {
  return (
      <Tab.Navigator initialRouteName='Home'> 
          <Tab.Screen name='Produtos' component={Home}></Tab.Screen>
          <Tab.Screen name='Meus Produtos' component={MyItens}></Tab.Screen>
          <Tab.Screen name='Fazer Doações' component={DonateArea}></Tab.Screen>
      </Tab.Navigator>    
  );
}