import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import estilo from "./Style";
import cadastrarPerfil from '../../services/cadastrarPerfil/cadastrarPerfil';
import { useTheme } from "./../ThemeContext"; // Importe o useTheme

export function Perfil() {
  const { theme } = useTheme(); // Obtenha o tema do contexto

  const [nome, setNome] = useState('');
  const [contato, setContato] = useState('');
  const [endereco, setEndereco] = useState('');

  const handleCadastro = () => {
    const data = {
      nome: nome,
      contato: contato,
      endereco: endereco,
    };

    console.log('Dados de cadastro:', data);
    cadastrarPerfil(data);
  };

  return (
    <View style={[estilo.container, { backgroundColor: theme === "daltonic" ? "#AABBCC" : "#191924" }]}>
      <Text style={[estilo.titulo, { color: theme === "daltonic" ? "black" : "white" }]}>Cadastro</Text>
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        style={[estilo.input, { backgroundColor: theme === "daltonic" ? "#AABBCC" : "#191924" }]}
      />
      <TextInput
        placeholder="Endereço"
        value={endereco}
        onChangeText={setEndereco}
        style={[estilo.input, { backgroundColor: theme === "daltonic" ? "#AABBCC" : "#191924" }]}
      />
      <TextInput
        placeholder="Contato"
        value={contato}
        onChangeText={setContato}
        style={[estilo.input, { backgroundColor: theme === "daltonic" ? "#AABBCC" : "#191924" }]}
      />
      <Button title="Cadastrar" onPress={handleCadastro} />
    </View>
  );
}
