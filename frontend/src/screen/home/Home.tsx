import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from 'react-native';
import listarProdutos from "../../services/listarProdutos/listarProdutos";
import ProductListScreen from './../../components/Filtrar/index';

export function Home() {
  const [produtos, setProdutos] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

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

  const updateFilteredProducts = (filteredItems) => {
    setFilteredProducts(filteredItems);
  };

  return (
    <View>
      <ProductListScreen updateFilteredProducts={updateFilteredProducts} />
      <Text>Produtos para doação</Text>
      <FlatList
        data={filteredProducts.length > 0 ? filteredProducts : produtos}
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
