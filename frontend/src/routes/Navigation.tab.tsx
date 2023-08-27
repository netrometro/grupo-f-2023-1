import * as React from 'react';
import { Home } from '../screen/home/Home';
import { DonateArea } from '../screen/donateItens/DonateArea';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MyItens } from '../screen/myItens/MyArea';
import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'
import { User } from '../screen/userArea/User';


const Tab = createBottomTabNavigator()

export default function TabComponent() {
  return (
      <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarHideOnKeyboard:true,
        
        tabBarStyle: { 
          position: 'absolute',
          backgroundColor: "#232231" ,
          borderTopWidth: 0,
          bottom:14,
          left:14,
          right:14,
          elevation:0,
          borderRadius:14,
          height: 50,
        },
      }}
      > 
          <Tab.Screen
           name='Produtos'
            component={Home}
            options={{
              tabBarIcon: ({focused}) => 
              focused
              ? <Feather name="home" size={30}  color="#7353ED"  />
              : <Feather name="home" size={24}  color="#808080"  />,
              headerShown:false,
       
            }}          
            ></Tab.Screen>
          <Tab.Screen
           name='Meus Produtos'
          component={MyItens}
          options={{
            tabBarIcon: ({focused}) => 
            focused
            ? <AntDesign name="car" size={30}  color="#7353ED"  />
            : <AntDesign name="car" size={24}  color="#808080"  />,
            headerShown:false,
     
          }}      
          ></Tab.Screen>
          <Tab.Screen 
          name='Fazer Doações'
          component={DonateArea}
          options={{
            tabBarIcon: ({focused}) => 
            focused
            ? <Feather name="plus-square" size={30}  color="#7353ED"  />
            : <Feather name="plus-square" size={24}  color="#808080"  />,
            headerShown:false,
     
          }}      
          ></Tab.Screen>
           <Tab.Screen 
          name='Meu perfil'
          component={User}
          options={{
            tabBarIcon: ({focused}) => 
            focused
            ? <Feather name="user" size={30}  color="#7353ED"  />
            : <Feather name="user" size={24}  color="#808080"  />,
            headerShown:false,
     
          }}      
          ></Tab.Screen>
      </Tab.Navigator>    
  );
}