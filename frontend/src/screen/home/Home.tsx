import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from 'react-native';
import listarProdutos from "../../services/listarProdutos/listarProdutos";
import ProductListScreen from './../../components/Filtrar/index';
import estilo from "./Styles";
import { Header } from "../../components/home/header";
import { Produto } from "../../components/home/produto";



// Pagina home, primeira página mostrada ao cliente logado, mostra todos os produtos.

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
    <View style={estilo.container}>
      <Header />
      <View style={estilo.filtroTitulo}>
        <Text style={estilo.titulo}>Produtos para doação</Text>
        <ProductListScreen updateFilteredProducts={updateFilteredProducts} />
      </View>
      <FlatList
        data={filteredProducts.length > 0 ? filteredProducts : produtos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            {/* <Text>{item.titulo}</Text>
            <Text>{item.descricao}</Text> */}
            <Produto nome={item.titulo}/>
          </View>
        )}
      />
    </View>
  );
}
