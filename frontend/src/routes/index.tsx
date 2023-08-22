import { NavigationContainer } from '@react-navigation/native';
import StackComponent from './NavigationStack';
import React from 'react';
import TabComponent from './Navigation.tab';

export default function Navegation(){
    return (
        <NavigationContainer>
            <StackComponent/>
        </NavigationContainer>
    )
}

