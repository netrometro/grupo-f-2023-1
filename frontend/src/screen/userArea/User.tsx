import React from "react";
import estilo from "./Style";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import { getAuth, signOut } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';


export function User() {
  const navigation = useNavigation();
  function logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // @ts-ignore
        navigation.navigate("TelaInicial")
      })
      .catch((error) => {
        console.log(error)
      });
  }

  return (
    <View style={estilo.container}>
      <Button mode="contained" onPress={() => {logout()}}>
        Sair da Conta
      </Button>
    </View>
  );
}
