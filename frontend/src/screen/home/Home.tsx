import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from 'react-native'; // Importe TouchableOpacity
import listarProdutos from "../../services/listarProdutos/listarProdutos";
import ProductListScreen from './../../components/Filtrar/index';
import { useTheme } from './../ThemeContext';
import { normalStyles, daltonicStyles } from "./Styles";

import { Header } from "../../components/home/header";
import { Produto } from "../../components/home/produto";

export function Home() {
  const { theme, toggleTheme } = useTheme(); // Obtenha o tema e a função toggleTheme do contexto

  const [produtos, setProdutos] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    async function carregarProdutos() {
      try {
        setInterval(async () => {
          const produtosData = await listarProdutos();
          setProdutos(produtosData);
        }, 1000)
      } catch (error) {
        console.error('Erro ao carregar produtos:', error);
      }
    }

    carregarProdutos();
  }, []);

  const updateFilteredProducts = (filteredItems) => {
    setFilteredProducts(filteredItems);
  };

  const styles = theme === 'daltonic' ? daltonicStyles : normalStyles;

  return (
    <View style={styles.container}>
      <Header />
      <TouchableOpacity // Botão para alternar entre os temas
        onPress={toggleTheme}
        style={{ margin: 10, padding: 10, backgroundColor: '#7353ED', borderRadius: 5 }}
      >
        
        <Text style={{ color: 'white' }}>Modo daltônico</Text>
      </TouchableOpacity>
      <View style={styles.filtroTitulo}>
        <Text style={styles.titulo}>Produtos para doação</Text>
        <ProductListScreen updateFilteredProducts={updateFilteredProducts} />
      </View>
      <FlatList
        style={{
          marginBottom: 70
        }}
        data={filteredProducts.length > 0 ? filteredProducts : produtos}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}
        renderItem={({ item }) => (
          <Produto nome={item.titulo} id={item.id} theme={theme} />
        )}
      />
    </View>
  );
}
