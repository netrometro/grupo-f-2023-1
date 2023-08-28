import * as firebaseAuth from "firebase/auth";
import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import Estilo from "./Style";
import { Button } from "react-native-paper";
import { initializeAuth, getAuth, onAuthStateChanged } from "firebase/auth";
import { getReactNativePersistence } from "../../config/persistUser";

import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../config/firebase.config";

export function Inicial({ navigation }) {

  const app = initializeApp(firebaseConfig);
  const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate("Home", { idUser: user.uid });
      }
    });
  }, []);


  

  return (
    <View style={Estilo.container}>
      <View style={Estilo.container_image_text}>
        <View style={Estilo.container_image}>
          <Image
            style={Estilo.image}
            source={require("../../assets/people.png")}
          />
        </View>

        <View style={Estilo.container_text}>
          <Text
            style={{
              width: 100,
              height: 40,
              textAlign: "right",
              fontSize: 30,
              fontWeight: "bold",
              color: "white",
            }}
          >
            Doe
          </Text>
          <View
            style={{
              width: 60,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={Estilo.image_mais}
              source={require("../../assets/mais.png")}
            />
          </View>
        </View>
      </View>
      <View style={Estilo.buttons_contaiener}>
        <Button
          style={Estilo.buttons}
          mode="contained"
          onPress={() => navigation.navigate("LogIn")}
        >
          Login
        </Button>

        <Button
          style={Estilo.buttons}
          mode="outlined"
          onPress={() => navigation.navigate("SignIn")}
        >
          Cadastrar
        </Button>
        <Text style={{color:"white"}}>Ou</Text>
        <Button
        
        icon="google"
          style={Estilo.buttons}
          mode="outlined"
          onPress={()=>{}}
        >
          Entrar com o Google
        </Button>
      </View>

    </View>
  );
}
