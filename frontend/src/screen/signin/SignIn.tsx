import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, TextInput, FlatList, KeyboardAvoidingView, Alert } from "react-native";
import Estilo from "./styles";
import { Button } from "react-native-paper";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import{initializeApp} from 'firebase/app'
import {firebaseConfig} from '../../config/firebase.config'


export function SignIn({navigation}) {

  const[email, setEmail] = React.useState('')
  const[senha, setSenha] = React.useState('')



  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => { // Obtenha o userCredential da função de retorno
        console.log("Conta criada");
        const user = userCredential.user; // Agora você pode acessar a propriedade user
        console.log("Usuário:", user);
        setEmail('')
        setSenha('')
        navigation.navigate('LogIn');
        
      })
      .catch((error) => {
        console.error("Erro ao criar conta:", error);
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
          autoCorrect={false}
          placeholderTextColor="#808080"
          placeholder="Seu Email"
          selectionColor={"#7353ED"}
          style={Estilo.input}
          onChangeText={(text)=> setEmail(text)}
        />
        <TextInput
          autoCorrect={false}
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
          onPress={handleCreateAccount}
        >
          Cadastrar
        </Button>
        <Text style={{ color: "white" }}>Ou</Text>
        <Button
        style = {{width:230}}
          icon="google"
          textColor="white"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Cadastre com o Google
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}
