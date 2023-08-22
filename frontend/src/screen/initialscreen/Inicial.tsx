import { useNavigation} from '@react-navigation/native';
import React from 'react';
import { Button, View, Text } from 'react-native';


export function Inicial({navigation}) {
    return (
        <View>
            <View>
                <Text>
                    TELA INICIAL DOE MAIS
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatum eius voluptatibus quo, quas quaerat sed veniam minus molestiae et odio placeat libero aperiam quos. Eaque distinctio sequi officiis ipsa.
                </Text>
            </View>
            <View>
                <Button title="Ir para a home" onPress={()=>{
                    navigation.navigate("Home") //-> O nome 'Donation' é o mesmo que o que está aqui: <Stack.Screen name='Donation' component={DonateArea}></Stack.Screen>
                }}/>
            </View>
            <View>
                <Button title="Login" onPress={()=>{
                    navigation.navigate("LogIn") //->Quando criar colocar aqui
                }}/>
            </View>
            <View>
                <Button title="Cadastro" onPress={()=>{
                    navigation.navigate("SignIn") //->Quando criar colocar aqui
                }}/>
            </View>
            
        </View>
    );
}
