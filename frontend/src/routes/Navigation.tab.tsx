import * as React from 'react';
import { Home } from '../screen/home/Home';
import { DonateArea } from '../screen/donateItens/DonateArea';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MyItens } from '../screen/myItens/MyArea';
import { Feather } from '@expo/vector-icons'; 




const Tab = createBottomTabNavigator()

export default function TabComponent() {
  return (
      <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { 
          position: 'absolute',
          backgroundColor: "#232231" ,
          borderTopWidth: 0,
          bottom:14,
          left:14,
          right:14,
          elevation:0,
          borderRadius:14

        
        }, // Define a cor de fundo da guia como amarela
      }}
      > 
          <Tab.Screen
           name='Produtos'
            component={Home}
            options={{
              tabBarIcon: () => <Feather name="home" size={24}  color="#808080" />,

              
            }}
            
            ></Tab.Screen>
          <Tab.Screen
           name='Meus Produtos'
          component={MyItens}
          options={{
            tabBarIcon: () => <Feather name="user" size={24}  color="#808080" />,

          }}
          ></Tab.Screen>
          <Tab.Screen 
          name='Fazer Doações'
          component={DonateArea}
          options={{
            tabBarIcon: () => <Feather name="plus-square" size={24}   color="#808080"/>,

          }}
          ></Tab.Screen>
      </Tab.Navigator>    
  );
}