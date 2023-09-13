import React, { useEffect, useState } from "react";
import estilo from "./Style";
import { View, Text, Image, SafeAreaView, Modal } from "react-native";
import { Button } from "react-native-paper";
import { getAuth, signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { UserProducts } from "./UserProducts";
import { Feather } from '@expo/vector-icons'
import axios from "axios";
import { MEU_IP } from "../../config";
import { useTheme } from "./../ThemeContext"; // Importe o useTheme

export function User() {
  const { theme } = useTheme(); // Obtenha o tema do contexto

  // Pegando o email do usuário por uma instancia
  const auth = getAuth();
  const user = auth.currentUser;

  // Instancia do navigation
  const navigation = useNavigation();

  interface UsuarioData {
    nome: string;
    contato: string;
    endereco: string;
  }

  const [usuario, setUsuario] = useState<UsuarioData>({nome: "Carregando...", contato: "Carregando...", endereco: "Carregando..."});

  // Função para fazer o logout
  function logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // @ts-ignore
        navigation.navigate("TelaInicial");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function trocarTela(){
     // @ts-ignore
    navigation.navigate("Perfil")
  }

  // Função para fazer GET do usuário logado
  async function getUserData() {
    try {
      const apiUrl = `${MEU_IP}/api/usuario/${user.uid}`;
    
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
  
  //Parte resposável por carregar os dados do perfil a serem mostrados na tela
  useEffect(() => {
    async function carregarUsuario() {
      try {
        setInterval(async()=>{
          try {
            const userData = await getUserData();
            setUsuario(userData);
          } catch (error) {
            setUsuario({nome: "Carregando...", contato: "Carregando...", endereco: "Carregando..."})
          }
        }, 1000)
      } catch (error) {
        console.error('Erro ao carregar produtos:', error);
      }
    }

    carregarUsuario();
  }, [user]);

  return (
    <View style={[estilo.container, { backgroundColor: theme === "daltonic" ? "#AABBCC" : "#191924" }]}>
      <View style={estilo.container_son}>
       <View style={estilo.userPhoto}>
       <Feather  name="user" size={24} color={theme === "daltonic" ? "black" : "#808080"}  />
       </View>
        {usuario?.nome ? (
          <Text style={[estilo.user_text_info, { color: theme === "daltonic" ? "black" : "white" }]}>{usuario.nome}</Text>
        ) : (
          <Text>{theme === "daltonic" ? "Nenhum usuário cadastrado." : "No user registered."}</Text>
        )}
        <Text>{user.email}</Text>
        {usuario?.endereco ? (
          <Text style={estilo.user_text_info}>{usuario.endereco}</Text>
        ) : (
          <Text>Nenhum usuário cadastrado.</Text>
        )}
        {usuario?.contato ? (
          <Text style={estilo.user_text_info}>{usuario.contato}</Text>
        ) : (
          <Text>Nenhum usuário cadastrado.</Text>
        )}
      </View>
      <Text
        style={{
          color: theme === "daltonic" ? "black" : "white",
          alignSelf: "flex-start",
          marginLeft: 30,
          marginBottom: 20,
        }}
      >
        {theme === "daltonic" ? "Minhas doações:" : "My donations:"}
      </Text>
      <SafeAreaView style={{ height: 200 }}>
        <UserProducts />
      </SafeAreaView>
      <View style={estilo.button_container}>
        <Button style={estilo.buttonLogout} mode="contained" onPress={() => {trocarTela()}}>
          {theme === "daltonic" ? "Criar Perfil" : "Create Profile"}
        </Button>
        <Button
          buttonColor="#D65353"
          style={estilo.buttonLogout}
          mode="contained"
          onPress={() => {
            logout();
          }}
        >
          {theme === "daltonic" ? "Logout" : "Logout"}
        </Button>
      </View>
    </View>
  );
}
