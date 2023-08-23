import { useNavigation} from '@react-navigation/native';
import React from 'react';
import { Button, View, Text } from 'react-native';


export function SignIn({navigation}) {
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
