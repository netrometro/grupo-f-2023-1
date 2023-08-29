import React from 'react'
import { View, Text } from 'react-native'


export  function Perfil() {
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