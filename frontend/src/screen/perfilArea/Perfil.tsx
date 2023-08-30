import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import estilo from "./Style";
import cadastrarPerfil from '../../services/cadastrarPerfil/cadastrarPerfil';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { firebaseConfig } from '../../config/firebase.config';


export  function Perfil() {

  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)

  const user = auth.currentUser;

  const [nome, setNome] = useState('');
  const [contato, setContato] = useState('');
  const [endereco, setEndereco] = useState('');

  const data = {
    id: user.uid,
    nome: nome,
    contato: contato,
    endereco: endereco,
    email: user.email
  }

  const handleCadastro = () => {
    console.log('Dados de cadastro:', { nome, endereco, contato });
    console.log('Dados de cadastro:', { data });
    cadastrarPerfil(data);
  };
  
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Cadastro</Text>

      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        style={estilo.input}
      />
      <TextInput
        placeholder="Endereço"
        value={endereco}
        onChangeText={setEndereco}
        style={estilo.input}
      />
      <TextInput
        placeholder="contato"
        value={contato}
        onChangeText={setContato}
        style={estilo.input}
      />
      <Button title="Cadastrar" onPress={handleCadastro} />

    </View>
  )
}