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
        setInterval(async()=>{
          const produtosData = await listarProdutos();
          setProdutos(produtosData);
        },1000)
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
        <FlatList style={{
          marginBottom: 70
        }}
          data={filteredProducts.length > 0 ? filteredProducts : produtos}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }} // Centraliza verticalmente
          renderItem={({ item }) => (
              <Produto nome={item.titulo} id={item.id}/>
          )}
        />
      </View>
  );
}
