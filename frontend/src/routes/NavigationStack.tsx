import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Inicial } from '../screen/initialscreen/Inicial';
import { Login } from '../screen/login/Login';
import { SignIn } from '../screen/signin/SignIn';
import TabComponent from './Navigation.tab';
import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, onAuthStateChanged } from 'firebase/auth';
import { firebaseConfig } from '../config/firebase.config';
import { useEffect } from 'react';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';





const Stack = createNativeStackNavigator()

export default function StackComponent() {
  

  const app = initializeApp(firebaseConfig)

  return (
      <Stack.Navigator initialRouteName='Inicial'> 
          <Stack.Screen 
          name='Tela Inicial' 
          component={Inicial}
          options={{
            headerShown:false
          }} 
          ></Stack.Screen>
          <Stack.Screen
           name='LogIn' 
           component={Login}
           options={{
            title:"",
            headerStyle:{
              backgroundColor:"#191924",
            },
            headerTintColor:"#808080",
           
           }}
           
           ></Stack.Screen>
          <Stack.Screen 
          name='SignIn' 
          component={SignIn}
          options={{
            title:"",
            headerStyle:{
              backgroundColor:"#191924",
            },
            headerTintColor:"#808080",
           
           }}
          
          ></Stack.Screen>
          <Stack.Screen
          name='Home'
          component={TabComponent}
          options={{
            headerShown:false
          }}
        ></Stack.Screen> 
      </Stack.Navigator>    
   
  );
}