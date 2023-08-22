import React, { useEffect, useState } from "react";
import { Text, View, FlatList, Button } from 'react-native';
import listarProdutos from "../../services/listarProdutos/listarProdutos";
import { useNavigation} from '@react-navigation/native';

import ProductListScreen from './../../components/Filtrar/index';


// Pagina home, primeira página mostrada ao cliente logado, mostra todos os produtos.

export function Home() {

    
    // Parte responsável por carregar os produtos, usando a função listarProdutos.

    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        async function carregarProdutos() {
            try {
                const produtosData = await listarProdutos();
                setProdutos(produtosData);
            } catch (error) {
                console.error('Erro ao carregar produtos:', error);
            }
        }

        carregarProdutos();
    }, []);

    return (
        <View>
            <ProductListScreen />
            <Text>Produtos para doação</Text>
            <FlatList
                data={produtos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.titulo}</Text>
                        <Text>{item.descricao}</Text>
                    </View>
                )}
            /> 
        </View>

    );
}
