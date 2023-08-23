import { useNavigation} from '@react-navigation/native';
import React, { useState } from 'react';
import { Button, View, Text, TextInput, TouchableOpacity } from 'react-native';
import estilo from "./styles";


export function SignIn({navigation}) {
    const [Nome, setNome] = useState('');
    const [Contato, setContato] = useState('');
    const [Endereco, setEndereco] = useState('');

    const handleCadastrar = () => {
        console.log('Nome:', Nome);
        console.log('Contato:', Contato);
        console.log('Endereco:', Endereco);
      };

    return (
        <View style={estilo.container}>
            <Text style={estilo.titulo  }>CADASTRAR</Text>
            <TextInput
                value={Nome}
                onChangeText={(Nome) => setNome(Nome)}
                placeholder={'Nome'}
                style={estilo.input}
            />
            <TextInput
                value={Contato}
                onChangeText={(Contato) => setContato(Contato)}
                placeholder={'Contato'}
                style={estilo.input}
            />
            <TextInput
                value={Endereco}
                onChangeText={(Endereco) => setEndereco (Endereco)}
                placeholder={'Endereco'}
                style={estilo.input}
            />
            <TouchableOpacity
            style={estilo.botao}
            onPress={handleCadastrar}
            >
                <Text>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    );
}
