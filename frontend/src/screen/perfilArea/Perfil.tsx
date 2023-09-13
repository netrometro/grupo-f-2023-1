import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import estilo from "./Style";
import cadastrarPerfil from '../../services/cadastrarPerfil/cadastrarPerfil';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { firebaseConfig } from '../../config/firebase.config';

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";


export  function Perfil() {

  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)

  const user = auth.currentUser;

  const [nome, setNome] = useState('');
  const [contato, setContato] = useState('');
  const [endereco, setEndereco] = useState('');

  const [nomeError, setNomeError] = useState('');
  const [contatoError, setContatoError] = useState('');
  const [enderecoError, setEnderecoError] = useState('');

  const validateFields = () => {
    let isValid = true;
  
    if (nome.trim() === '') {
      setNomeError('O nome não pode estar em branco');
      isValid = false;
    } else {
      setNomeError('');
    }
  
    if (contato.trim() === '') {
      setContatoError('O contato não pode estar em branco');
      isValid = false;
    } else {
      setContatoError('');
    }
  
    if (endereco.trim() === '') {
      setEnderecoError('O endereço não pode estar em branco');
      isValid = false;
    } else {
      setEnderecoError('');
    }
  
    return isValid;
  };


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
      {enderecoError !== '' && <Text style={estilo.errorText}>{enderecoError}</Text>}
      <View style={estilo.phoneInput}>
        <PhoneInput
          country={"br"}
          enableSearch={true}
          value={contato}
          onChange={(contato) => setContato(contato)}
        />
      </View>
      <Button title="Cadastrar" onPress={handleCadastro} />

    </View>
  )
}