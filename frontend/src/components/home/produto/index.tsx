import { Text, TouchableOpacity, View } from "react-native";
import estilo from "./styles";
import React from "react";
import { Feather } from "@expo/vector-icons";
import  addToLista  from "./addLista";


export function Produto({ nome, id }) {
  return (
    <View style={estilo.produto}>
      <View style={estilo.produtoTras}></View>
      <Text style={estilo.nome}>{nome}</Text>
      
      <TouchableOpacity
          onPress={() => {addToLista(id)}}
          style={estilo.button}
        >
          <Feather name="heart" size={24} color="#D65353" />
        </TouchableOpacity>
  
    </View>
  );
}
