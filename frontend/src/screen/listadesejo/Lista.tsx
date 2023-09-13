import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import estilo from "./Style";
import getProdutos from "./getProducts";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "./../ThemeContext"; // Importe o useTheme

export function Lista() {
  const [produtos, setProdutos] = useState([]);
  const { theme } = useTheme(); // Obtenha o tema do contexto

  useEffect(() => {
    async function carregarProdutos() {
      try {
        setInterval(async () => {
          const produtosData = await getProdutos();
          setProdutos(produtosData);
        }, 1000);
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      }
    }

    carregarProdutos();
  }, []);

  const handleDeletarPress = async (id) => {
    try {
      const apiUrl = `${MEU_IP}/api/produto/lista/${id}`;
      console.log(id);
      const response = await axios.delete(apiUrl);
      return response.data;
    } catch (error) {
      console.error("Erro ao deletar o dado:", error);
    }
  };

  return (
    <View style={[estilo.container, { backgroundColor: theme === "daltonic" ? "#AABBCC" : "#191924" }]}>
      <View style={estilo.cabecalho}>
        <Text style={[estilo.titulo, { color: theme === "daltonic" ? "black" : "white" }]}>Lista de Desejo</Text>
      </View>
      <View>
        <FlatList
          style={{
            marginBottom: 200
          }}
          data={produtos}
          keyExtractor={(item) => item.produto.id.toString()}
          numColumns={2}
          contentContainerStyle={{ flexGrow: 1, alignItems: "center" }} // Centraliza verticalmente
          renderItem={({ item }) => (
            <View style={estilo1.produto}>
              <View style={estilo1.produtoTras}></View>
              <Text style={[estilo1.nome, { color: theme === "daltonic" ? "black" : "white" }]}>{item.produto.titulo}</Text>

              <Text style={estilo1.nome}>{item.produto.titulo}</Text>
              <TouchableOpacity
                onPress={() => {
                  handleDeletarPress(item.listaDesejoId);
                }}
                style={estilo1.button}
              >
                <Feather name="trash" size={24} color="#D65353" />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
}


import { StyleSheet } from "react-native";
import deletarhoras from "../../services/deletarhoras/deletarhoras";
import { MEU_IP } from "../../config";
import axios from "axios";

const estilo1 = StyleSheet.create({
  produto: {
    backgroundColor: "#7353ED",
    height: 180,
    width: 140,
    margin: 21,
    borderRadius: 18,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  produtoTras: {
    backgroundColor: "#232231",
    height: 110,
    width: 140,
    borderRadius: 18,
    alignSelf: "center",
    flexDirection: "column-reverse",
  },
  nome: {
    color: "white",
    textAlign: "center",
  },

  button: {
    width: 50,
    height: 50,
    borderRadius: 360,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
