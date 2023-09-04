import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import estilo from './Style'




export function Lista() {
 
  return (
    <View style={estilo.container}>
        <View style={estilo.cabecalho}>
            <Text style={estilo.titulo}>
                Lista de Desejo
            </Text>
        </View>
        <SafeAreaView>
            
        </SafeAreaView>
    </View>
  );
}
