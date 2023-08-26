import { useNavigation} from '@react-navigation/native';
import React from 'react';
import { Button, View, Text } from 'react-native';
import Estilo from './Style'


export function Inicial({navigation}) {
    return (
        <View style ={Estilo.container}>

        <View style = {Estilo.container_image_text}>
            <View style={Estilo.container_image}>

            </View>

            <View style={Estilo.container_text}>

            </View>
        </View>









            <View>
                <Button title="Login" onPress={()=>{
                    navigation.navigate("LogIn") //->Quando criar colocar aqui
                }}/>
            </View>
            <View>
                <Button title="Cadastrar" onPress={()=>{
                    navigation.navigate("SignIn") //->Quando criar colocar aqui
                }}/>
            </View>
            
        </View>
    );
}
