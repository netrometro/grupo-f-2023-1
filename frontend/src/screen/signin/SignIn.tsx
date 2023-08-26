import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image } from "react-native";
import Estilo from "./styles";
import { Button } from "react-native-paper";



export function SignIn({navigation}) {

    return (

            <View style={Estilo.container}>
              <View style={Estilo.container_image}>
                <View>
                  <Image
                    style={Estilo.image}
                    source={require("../../assets/sittingLady.png")}
                  />
                </View>
              </View>
              <View style={Estilo.text_and_button}>
                <Button
                  icon="google"
                  textColor="white"
                  mode="contained"
                  onPress={() => console.log("Pressed")}
                >
                  Cadastre com o Google
                </Button>
                <View style={Estilo.text_footer_container}>
                  <Text style={{color:"white"}}>Seja a diferença</Text>
                </View>
              </View>
            </View>
    )
}
