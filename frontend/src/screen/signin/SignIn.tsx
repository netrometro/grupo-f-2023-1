import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, TextInput, FlatList, KeyboardAvoidingView } from "react-native";
import Estilo from "./styles";
import { Button } from "react-native-paper";

export function SignIn({ navigation }) {
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
        />
        <TextInput
          autoCorrect={false}
          placeholderTextColor="#808080"
          placeholder="Sua Senha"
          selectionColor={"#7353ED"}
          style={Estilo.input}
        />

        <Button
          style = {{width:230}}
          textColor="white"
          mode="contained"
          onPress={() => console.log("Pressed")}
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
