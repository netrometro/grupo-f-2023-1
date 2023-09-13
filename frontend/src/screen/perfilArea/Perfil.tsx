import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import estilo from "./Style";
import cadastrarPerfil from '../../services/cadastrarPerfil/cadastrarPerfil';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { firebaseConfig } from '../../config/firebase.config';
import { useTheme } from "./../ThemeContext"; // Importe o useTheme

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export  function Perfil() {
  const { theme } = useTheme(); // Obtenha o tema do contexto

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
    if (validateFields()) {
      console.log('Dados de cadastro:', { nome, endereco, contato });
      console.log('Dados de cadastro:', { data });
      cadastrarPerfil(data);
    } else {
      toast.error('Por favor, preencha todos os campos obrigatórios.', {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    };
  
  return (
    <View style={[estilo.container, { backgroundColor: theme === "daltonic" ? "#AABBCC" : "#191924" }]}>
      <ToastContainer />
      <Text style={[estilo.titulo, { color: theme === "daltonic" ? "black" : "white" }]}>Cadastro</Text>

      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        style={estilo.input}
      />
      {nomeError !== '' && <Text style={estilo.errorText}>{nomeError}</Text>}
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
        {contatoError !== '' && <Text style={estilo.errorText}>{contatoError}</Text>}
      </View>
      <Button title="Cadastrar" onPress={handleCadastro} />

    </View>
  )
}