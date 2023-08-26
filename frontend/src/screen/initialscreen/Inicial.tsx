import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import Estilo from "./Style";
import { Button } from "react-native-paper";

export function Inicial({ navigation }) {
  return (
    <View style={Estilo.container}>
      <View style={Estilo.container_image_text}>
        <View style={Estilo.container_image}></View>

        <View style={Estilo.container_text}></View>
      </View>
      <View style = {Estilo.buttons_contaiener}>
      </View>

      <View style = {Estilo.text_footer}>
     
      </View>
    </View>
  );
}
