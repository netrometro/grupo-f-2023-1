import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { RadioButton, Button  } from "react-native-paper";
import Estilo from "./Styles";
import axios from "axios"
import { MEU_IP } from "../../config";

export function DonateArea() {
  const [title, setTitle] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [description, setDescription] = useState("");


  const handleDonation = () => {
    const formData = {
      titulo:title,
      categoriaId: Number(selectedCategory),
      descricao:description,
    };

    axios
      .post(`${MEU_IP}/api/produto`, formData)
      .then((response) => {
        console.log("Doação enviada com sucesso", response.data);
      })
      .catch((error) => {
        console.error("Erro ao enviar doação", error);
      }); 
      setTitle("")
      setSelectedCategory("")
      setDescription("")
  };

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
        <TextInput 
        style={Estilo.tituloImput}
        value={title}
        onChangeText={setTitle} />
      </View>

      <View style={Estilo.categoriaContainer}>
        <Text style={Estilo.categoriaText}>Categoria:</Text>
        <View style={Estilo.categoriaRadio}>
          <View style={Estilo.TextAndRadio}>
            <RadioButton
              value="1"
              status={selectedCategory === "1" ? "checked" : "unchecked"}
              color={selectedCategory === "checked" ? "#808080" : "#7353ED"}
              onPress={() => setSelectedCategory("1")}
            />
            <Text style={Estilo.textRaio}>Roupas</Text>
          </View>
          <View style={Estilo.TextAndRadio}>
            <RadioButton
              color={selectedCategory === "checked" ? "#808080" : "#7353ED"}
              value="2"
              status={
                selectedCategory === "2" ? "checked" : "unchecked"
              }
              onPress={() => setSelectedCategory("2")}
            />
            <Text style={Estilo.textRaio}>Alimentos</Text>
          </View>
          <View style={Estilo.TextAndRadio}>
            <RadioButton
              color={selectedCategory === "checked" ? "#808080" : "#7353ED"}
              value="3"
              status={
                selectedCategory === "3" ? "checked" : "unchecked"
              }
              onPress={() => setSelectedCategory("3")}
            />
            <Text style={Estilo.textRaio}>Brinquedos</Text>
          </View>
          <View style={Estilo.TextAndRadio}>
            <RadioButton
              color={selectedCategory === "checked" ? "#808080" : "#7353ED"}
              value="4"
              status={selectedCategory === "4" ? "checked" : "unchecked"}
              onPress={() => setSelectedCategory("4")}
            />
            <Text style={Estilo.textRaio}>Livros</Text>
          </View>
        </View>
      </View>

      <View style={Estilo.descricaoContainer}>
        <Text style={Estilo.descricaoText}>Descrição:</Text>
        <TextInput 
        style={Estilo.descricaoImput}
        value={description}
        onChangeText={setDescription}
        />
      </View>

        <Button style={Estilo.botaoDoar} mode="contained" onPress={handleDonation}>
         Fazer Doação
        </Button>
    </View>
  );
}
