import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { RadioButton, Button } from "react-native-paper";
import Estilo from "./Styles";
import axios from "axios";
import { MEU_IP } from "../../config";
import { getAuth } from "firebase/auth";
import { useTheme } from "./../ThemeContext"; // Importe o useTheme

export function DonateArea() {
  const { theme } = useTheme(); // Obtenha o tema do contexto

  const [title, setTitle] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [description, setDescription] = useState("");
  const [isTransportSelected, setIsTransportSelected] = useState(false);
  const [destino, setDestino] = useState("");
  const [cep, setCep] = useState("");
  const auth = getAuth();
  const user = auth.currentUser;

  const handleDonation = async() => {
    const formData = {
      titulo: title,
      categoriaId: Number(selectedCategory),
      descricao: description,
      identificadoUsuario: user.uid,
      destinoEntrega: destino,
      cepProduto: cep, // Adicione o CEP do usuário ao formData
    };
    
    await axios
      .post(`${MEU_IP}/api/produto`, formData)
      .then((response) => {
        console.log("Doação enviada com sucesso", response.data);
      })
      .catch((error) => {
        console.error("Erro ao enviar doação", error);
      });


      const corpoReq ={
        email:user.email,
        produto: title
      }

      try {
        await axios
        .post(`https://api-email-jx4u.onrender.com/email`, corpoReq)
        .then((response) => {
          console.log("Email enviado com sucesso");
        })
        .catch((error) => {
          console.error("Erro ao enviar email", error);
        });
      } catch (error) {
        console.log(error)
      }
  
    

    setTitle("");
    setSelectedCategory(" ");
    setDescription("");
    setDestino("");
    setCep(""); // Limpe o campo de CEP após o envio

 
   
  };

  return (
    <View style={[Estilo.container, { backgroundColor: theme === "daltonic" ? "#AABBCC" : "#191924" }]}>
      <View style={Estilo.tituloContainer}>
        <Text style={Estilo.tituloText}>Título:</Text>
        <TextInput
          selectionColor={theme === "daltonic" ? "#AABBCC" : "#7353ED"}
          style={Estilo.tituloImput}
          value={title}
          onChangeText={setTitle}
        />
      </View>
      <View style={Estilo.categoriaContainer}>
        <Text style={Estilo.categoriaText}>Categoria:</Text>
        <View style={Estilo.categoriaRadio}>
        <View style={Estilo.TextAndRadio}>
          <RadioButton
            color={selectedCategory === "checked" ? "#808080" : "#7353ED"}
            value="1"
            status={selectedCategory === "1" ? "checked" : "unchecked"}
            onPress={() => setSelectedCategory("1")}
          />
          <Text style={Estilo.textRaio}>Roupas</Text>
        </View>
        <View style={Estilo.TextAndRadio}>
          <RadioButton
            color={selectedCategory === "checked" ? "#808080" : "#7353ED"}
            value="2"
            status={selectedCategory === "2" ? "checked" : "unchecked"}
            onPress={() => setSelectedCategory("2")}
          />
          <Text style={Estilo.textRaio}>Alimentos</Text>
        </View>
        <View style={Estilo.TextAndRadio}>
          <RadioButton
            color={selectedCategory === "checked" ? "#808080" : "#7353ED"}
            value="3"
            status={selectedCategory === "3" ? "checked" : "unchecked"}
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

        <View style={Estilo.TextAndRadio}>
      <RadioButton
        color={selectedCategory === "checked" ? "#808080" : "#7353ED"}
        value="5"
        status={selectedCategory === "5" ? "checked" : "unchecked"}
        onPress={() => {
          setSelectedCategory("5");
          setIsTransportSelected(true);
          
        }}
      />
      <Text style={Estilo.textRaio}>Transporte</Text>
    </View>
  </View>
</View>


{isTransportSelected && selectedCategory === "5" && (
        <View style={Estilo.distanciaContainer}>
          <Text style={Estilo.distanciaTextt}>
            Coloque o seu destino e descreva quais produtos você pode entregar
          </Text>
          <Text style={Estilo.distanciaText}>Destino:</Text>
          <TextInput
            selectionColor={"#7353ED"}
            style={Estilo.distanciaInput}
            value={destino}
            onChangeText={(text) => {
              // Verifica se o texto inserido é um número
              setDestino(text);
            }}
          />

          {/* Novo campo de entrada para o CEP */}
          <Text style={Estilo.distanciaText}>CEP:</Text>
          <TextInput
            selectionColor={"#7353ED"}
            style={Estilo.distanciaInput}
            value={cep}
            onChangeText={(text) => {
              // Verifica se o texto inserido é um número
              setCep(text);
            }}
            keyboardType="numeric"
          />
        </View>
      )}

      <View style={Estilo.descricaoContainer}>
        <Text style={Estilo.descricaoText}>Descrição:</Text>
        <TextInput
          selectionColor={"#7353ED"}
          style={Estilo.descricaoImput}
          value={description}
          onChangeText={setDescription}
        />
      </View>

      <Button
        style={Estilo.botaoDoar}
        mode="contained"
        onPress={handleDonation}
      >
        Fazer Doação
      </Button>
    </View>
  );
}