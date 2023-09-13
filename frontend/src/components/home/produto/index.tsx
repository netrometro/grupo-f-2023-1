import { Linking, Text, TouchableOpacity, View } from "react-native";
import estilo from "./styles";
import React from "react";
import { Feather } from "@expo/vector-icons";
import  addToLista  from "./addLista";
import { MEU_IP } from "../../../config";
import { getAuth } from "firebase/auth";
import axios from "axios";

export function Produto({ nome, id, identifcadoUsuario}) {

  interface UsuarioData {
    nome: string;
    contato: string;
    endereco: string;
  }

  const userId = identifcadoUsuario;

  //Função para fazer GET do dono (user) do produto a ser doado
  async function getUserData() {
    try{
      
      const apiUrl = `${MEU_IP}/api/usuario/${userId}`;
      console.log(apiUrl)
    
      // Faz uma requisição GET para a API usando o Axios
      const response = await axios.get(apiUrl);

      const userData: UsuarioData = response.data;

      // Retorna os dados da resposta da API
      return userData;

    } catch (error) {
      console.log("Problema do axios: " + error)
      throw error
    }
  }

  //Função responsável por gerar o link do whatsapp
  async function openWhatsApp() {
    try {
      const uData = await getUserData()
  
      const whatsappLink = `https://wa.me/${uData.contato}?text=Opa+${uData.nome},+vim+do+DoeMais.+Estou+interessado+em:+${nome}`;
      console.log(whatsappLink)
      Linking.openURL(whatsappLink);

    } catch (error) {
      console.log(error)
    }

  }
  

  return (
    <View style={estilo.produto}>
      <View style={estilo.produtoTras}></View>
      <Text style={estilo.nome}>{nome}</Text>
      <View style={estilo.teste}>
        <TouchableOpacity
            onPress={() => {addToLista(id)}}
            style={estilo.button}
          >
            <Feather name="heart" size={24} color="#D65353" />
          </TouchableOpacity>

        <TouchableOpacity onPress={openWhatsApp} style={estilo.button}>
          <Feather name="message-square" size={24} color="#232231" />
        </TouchableOpacity>
      </View>

    </View>
  );
}