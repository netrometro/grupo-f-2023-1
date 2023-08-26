import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image } from "react-native";
import Estilo from "./Style";
import { Button } from "react-native-paper";

export function Inicial({ navigation }) {
  return (
    <View style={Estilo.container}>
      <View style={Estilo.container_image_text}>
        <View style={Estilo.container_image}>
        <Image style={Estilo.image} source={require('../../assets/people.png')}/>
        </View>

        <View style={Estilo.container_text}>
            <Text style=
            {
                {
            width:100,
            height:40,
            textAlign:"right",
            fontSize:30,
            fontWeight:"bold",
            color:"white"
        
        }
            }>Doe</Text>
            <View style=
            {
                {
                    width:60,
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                }
            } >
                <Image style={Estilo.image_mais} source={require('../../assets/mais.png')}/>
            </View>
        </View>
      </View>
      <View style={Estilo.buttons_contaiener}>
        <Button style = {Estilo.buttons}
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Login
        </Button>
        <Button style = {Estilo.buttons}

          mode="outlined"
          onPress={() => console.log("Pressed")}
        >
          Cadastrar
        </Button>
      </View>

      <View style={Estilo.text_footer}>
        <Text style={{color:"white"}}>
            Seja a diferença
        </Text>
      </View>
    </View>
  );
}
