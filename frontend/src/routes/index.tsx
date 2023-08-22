import { NavigationContainer } from '@react-navigation/native';
import StackComponent from './NavigationStack';
import React from 'react';
import { StatusBar } from 'react-native';

export default function Navegation(){
    return (
        
        <NavigationContainer>
            <StatusBar hidden/>
            <StackComponent/>
        </NavigationContainer>
    )
}

