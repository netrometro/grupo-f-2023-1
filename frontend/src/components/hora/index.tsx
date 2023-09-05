import { Text, View, TouchableOpacity } from 'react-native';
import estilo from "./styles";
import React, { useState, useEffect } from 'react';
import deletarhoras from "../../services/deletarhoras/deletarhoras";
import axios from 'axios';

export function Produto({ nome, id, destino, cep }) {
    const [cepInfo, setCepInfo] = useState(null);

    useEffect(() => {
        // Função para buscar informações do CEP usando Axios
        const fetchCepInfo = async () => {
            try {
                const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
                setCepInfo(response.data);
            } catch (error) {
                console.error('Erro ao buscar informações do CEP:', error);
            }
        };

        // Verifica se o CEP está disponível e busca as informações
        if (cep) {
            fetchCepInfo();
        }
    }, [cep]);

    const handleDeletarPress = async () => {
        try {
            await deletarhoras(id);
            // Atualize a interface ou faça qualquer outra ação necessária após a exclusão bem-sucedida
        } catch (error) {
            console.error('Erro ao deletar o dado:', error);
        }
    }

    return (
        <View style={estilo.produto}>
            <View style={estilo.produtoTras}>
            </View>
            <Text style={estilo.nome}>{nome}</Text>
            <Text style={estilo.nome}>{destino}</Text>
            {cepInfo ? (
                <View>
                    <Text style={estilo.nome}>CEP: {cepInfo.cep}</Text>
                    <Text style={estilo.nome}>Logradouro: {cepInfo.logradouro}</Text>
                    <Text style={estilo.nome}>Bairro: {cepInfo.bairro}</Text>
                    <Text style={estilo.nome}>Cidade: {cepInfo.localidade}</Text>
                    <Text style={estilo.nome}>Estado: {cepInfo.uf}</Text>
                </View>
            ) : (
                <Text style={estilo.nome}>Buscando informações do CEP...</Text>
            )}
            <TouchableOpacity style={estilo.botaoDeletar} onPress={handleDeletarPress} >
                <Text style={estilo.botaoDeletarText}>Concluido</Text>
            </TouchableOpacity>
        </View>
    );
}
