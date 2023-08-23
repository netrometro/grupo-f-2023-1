import { Text, View } from 'react-native';
import estilo from "./styles";
import React from 'react';


export function Produto({nome}) {

    return (
        <View style={estilo.produto}>
            <View style={estilo.produtoTras}>
            </View>
                <Text style={estilo.nome}>{nome}</Text>
        </View>

    );
}

