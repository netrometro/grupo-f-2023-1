import { useNavigation} from '@react-navigation/native';
import React from 'react';
import { Button, View, Text } from 'react-native';


export function Inicial({navigation}) {
    return (
        <View>
            <View>
                <Text>
                    TELA INICIAL DOE MAIS
                </Text>
            </View>
            <View>
                <Button title="Ir para a home" onPress={()=>{
                    navigation.navigate("Home") //-> O nome 'Donation' é o mesmo que o que está aqui: <Stack.Screen name='Donation' component={DonateArea}></Stack.Screen>
                }}/>
            </View>
            <View>
                <Button title="Login" onPress={()=>{
                    navigation.navigate("") //->Quando criar colocar aqui
                }}/>
            </View>
            <View>
                <Button title="Cadastro" onPress={()=>{
                    navigation.navigate("") //->Quando criar colocar aqui
                }}/>
            </View>
            
        </View>
    );
}
