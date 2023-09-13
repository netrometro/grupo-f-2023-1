import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import estilo from "./styles";
import { Feather } from "@expo/vector-icons";
import addToLista from "./addLista";
import { useTheme } from './../../../screen/ThemeContext';

export function Produto({ nome, id }) {
  const { theme } = useTheme();
  const { theme: produtoTheme } = useTheme(); // Acesse o tema específico do Produto

  return (
    <View style={[estilo.produto, { backgroundColor: produtoTheme.backgroundColor }]}>
      <View style={estilo.produtoTras}></View>
      <Text style={estilo.nome}>{nome}</Text>
      <TouchableOpacity
        onPress={() => { addToLista(id) }}
        style={estilo.button}
      >
        <Feather name="heart" size={24} color="#D65353" />
      </TouchableOpacity>
    </View>
  );
}
