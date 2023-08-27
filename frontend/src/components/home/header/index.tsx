import { Text, View } from 'react-native';
import estilo from "./styles";
import React from 'react';


export function Header() {

    return (
        <View style={estilo.header}>
     
            <Text style={estilo.textoPrincipal}>Olá, Rônald.</Text>
            <Text style={estilo.textoSecundario}>Quer ajudar ou precisa de ajuda? Aqui é o lugar certo.</Text>
        </View>
    );
}

