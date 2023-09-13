import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from './../screen/ThemeContext'; // Importe o ThemeProvider
import StackComponent from './NavigationStack';

export default function Navegation() {
  return (
    <ThemeProvider> 
      <NavigationContainer>
        <StatusBar hidden />
        <StackComponent />
      </NavigationContainer>
    </ThemeProvider>
  );
}
