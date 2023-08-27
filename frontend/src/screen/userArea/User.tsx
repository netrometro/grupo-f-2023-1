import React from "react";
import estilo from "./Style";
import { View, Text, Image, SafeAreaView } from "react-native";
import { Button } from "react-native-paper";
import { getAuth, signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { UserProducts } from "./UserProducts";

export  function User() {
  const navigation = useNavigation();
  function logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // @ts-ignore
        navigation.navigate("TelaInicial");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <View style={estilo.container}>
      <View style={estilo.container_son}>
        <Image style={estilo.userImage} source={require("../../assets/david.jpg")}></Image>
        <Text style = {estilo.user_text_info}>David Emmanoel Lopes Rocha</Text>
        <Text>manoeudavi3@gmail.com</Text>
        <Text>(87) 9 96269050</Text>
        <Text>Garanhuns, PE, Brasil</Text>
      </View>
      <Text style={{color:"white"}}>Meus produtos</Text>
      <SafeAreaView style={{ height:200}}>
        <UserProducts  />
      </SafeAreaView>
       <Button style={estilo.buttonLogout} mode="contained" onPress={() => {}}>
        Editar Perfil
      </Button>
      <Button buttonColor="#D65353" style={estilo.buttonLogout} mode="contained" onPress={() => {logout()}}>
        Sair da Conta
      </Button>
     
    </View>
  );
}
