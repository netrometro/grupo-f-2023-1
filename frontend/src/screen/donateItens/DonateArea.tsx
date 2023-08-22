import React, { useState } from "react";
import { View, Text, TextInput, KeyboardAvoidingView } from "react-native";
import { RadioButton } from "react-native-paper";
import Estilo from "./Styles";

export function DonateArea() {
  const [selectedCategory, setSelectedCategory] = useState(""); // Estado para rastrear a categoria selecionada

  return (
    <View style={Estilo.container}>
      <View style={Estilo.imagem}>
        <Text style={Estilo.imagemText}>Imagem</Text>
        <View>
          <Text style={Estilo.imagemText}>Adicione imagem aqui</Text>
        </View>
      </View>

      <View style={Estilo.tituloContainer}>
        <Text style={Estilo.tituloText}>Título:</Text>
        <TextInput style={Estilo.tituloImput} />
      </View>

      <View style={Estilo.categoriaContainer}>
        <Text style={Estilo.categoriaText}>Categoria:</Text>
        <View style={Estilo.categoriaRadio}>
          <View style={Estilo.TextAndRadio}>
            <RadioButton
              value="Roupas"
              status={selectedCategory === "Roupas" ? "checked" : "unchecked"}
              color={selectedCategory === "checked" ? "#808080" : "#7353ED"}
              onPress={() => setSelectedCategory("Roupas")}
            />
            <Text style={Estilo.textRaio}>Roupas</Text>
          </View>
          <View style={Estilo.TextAndRadio}>
            <RadioButton
              color={selectedCategory === "checked" ? "#808080" : "#7353ED"}
              value="Alimentos"
              status={
                selectedCategory === "Alimentos" ? "checked" : "unchecked"
              }
              onPress={() => setSelectedCategory("Alimentos")}
            />
            <Text style={Estilo.textRaio}>Alimentos</Text>
          </View>
          <View style={Estilo.TextAndRadio}>
            <RadioButton
              color={selectedCategory === "checked" ? "#808080" : "#7353ED"}
              value="Brnquedos"
              status={
                selectedCategory === "Brinquedos" ? "checked" : "unchecked"
              }
              onPress={() => setSelectedCategory("Brinquedos")}
            />
            <Text style={Estilo.textRaio}>Brinquedos</Text>
          </View>
          <View style={Estilo.TextAndRadio}>
            <RadioButton
              color={selectedCategory === "checked" ? "#808080" : "#7353ED"}
              value="Livros"
              status={selectedCategory === "Livros" ? "checked" : "unchecked"}
              onPress={() => setSelectedCategory("Livros")}
            />
            <Text style={Estilo.textRaio}>Livros</Text>
          </View>
        </View>
      </View>

      <View style={Estilo.descricaoContainer}>
        <Text style={Estilo.descricaoText}>Descrição</Text>
        <TextInput style={Estilo.descricaoImput} />
      </View>

      <View style={Estilo.botaoDoarContainer}>
        <Text>Doar</Text>
      </View>
    </View>
  );
}
