import * as React from 'react';
import { Home } from '../screen/home/Home';
import { DonateArea } from '../screen/donateItens/DonateArea';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MyItens } from '../screen/myItens/MyArea';
import { Feather } from '@expo/vector-icons'; 




const Tab = createBottomTabNavigator()

export default function TabComponent() {
  return (
      <Tab.Navigator initialRouteName='Home'> 
          <Tab.Screen
           name='Produtos'
            component={Home}
            options={{
              tabBarIcon: () => <Feather name="home" size={24} color="black" />
            }}
            
            ></Tab.Screen>
          <Tab.Screen
           name='Meus Produtos'
          component={MyItens}
          options={{
            tabBarIcon: () => <Feather name="user" size={24} color="black" />
          }}
          ></Tab.Screen>
          <Tab.Screen 
          name='Fazer Doações'
          component={DonateArea}
          options={{
            tabBarIcon: () => <Feather name="plus-square" size={24} color="black" />
          }}
          ></Tab.Screen>
      </Tab.Navigator>    
  );
}