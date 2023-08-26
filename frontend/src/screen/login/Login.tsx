import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, TextInput, KeyboardAvoidingView } from "react-native";
import Estilo from "./Style";
import { Button } from "react-native-paper";

export function Login({ navigation }) {
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
        />
        <TextInput
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
          Login
        </Button>
        <Text style={{ color: "white" }}>Ou</Text>
        <Button
        style = {{width:230}}
          icon="google"
          textColor="white"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Login com o Google
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}
