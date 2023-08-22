import React from "react";
import { View, Text } from "react-native";
import Estilo from "./Styles";

export function DonateArea() {
  return (
    <View style={Estilo.container}>
      <View style={Estilo.imagem}>
        <Text>Imagem</Text>
        <View>
          <Text>Adicione imagem aqui</Text>
        </View>
      </View>
      <View style={Estilo.produtoTitulo}>
        <Text>titulo</Text>
        
      </View>
      <View style={Estilo.produtoCategoria}>
        <Text>categoria</Text>
      </View>
      <View style={Estilo.produtoDescricao}>
        <Text>descrição</Text>
      </View>
      <View style={Estilo.botaoDoar}>
        <Text>doar</Text>
      </View>
    </View>
  );
}
