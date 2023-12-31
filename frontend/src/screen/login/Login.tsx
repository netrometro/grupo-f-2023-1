import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, Image, TextInput, KeyboardAvoidingView, Alert } from "react-native";
import Estilo from "./Style";
import { Button } from "react-native-paper";
import {initializeAuth, signInWithEmailAndPassword } from 'firebase/auth'
import{initializeApp} from 'firebase/app'
import {firebaseConfig} from '../../config/firebase.config'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';




export function Login({ navigation }) {

  const[email, setEmail] = React.useState('')
  const[senha, setSenha] = React.useState('')


  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)

  const handleLogIn = () => {
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => { // Obtenha o userCredential da função de retorno
        console.log("usuário logado");
        const user = userCredential.user; // Agora você pode acessar a propriedade user
        console.log("Usuário:", user);
        navigation.navigate('Home', {idUser: user.uid});
      })
      .catch((error) => {
        Alert.alert("Senha ou Email incorreto")
        console.error("erro ao logar:", error);
      });
  }

  return (
    <KeyboardAvoidingView 
    behavior="position"
    style={Estilo.container}>
      <View style={Estilo.container_image}>
        <View>
          <Image
            style={Estilo.image}
            source={require("../../assets/sittingLady.png")}
          />
        </View>
      </View>
      <View style={Estilo.text_and_button}>
        <TextInput
          placeholderTextColor="#808080"
          placeholder="Seu Email"
          selectionColor={"#7353ED"}
          style={Estilo.input}
          onChangeText={(text)=> setEmail(text)}
        />
        <TextInput
          placeholderTextColor="#808080"
          placeholder="Sua Senha"
          selectionColor={"#7353ED"}
          style={Estilo.input}
          onChangeText={(text)=> setSenha(text)}
        />

        <Button
        style = {{width:230}}
          textColor="white"
          mode="contained"
          onPress={handleLogIn}
        >
          Login
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}