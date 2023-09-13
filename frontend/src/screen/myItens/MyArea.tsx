import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from 'react-native';
import filtrarhoras from "../../services/filtrarhoras/filtrarhoras";
import ProductListScreen from './../../components/Filtrarhora/index';
import estilo from "./Styles";
import { Produto } from "../../components/hora/index";
import { useTheme } from "./../ThemeContext"; // Importe o useTheme

export function MyItens() {
  const { theme } = useTheme(); // Obtenha o tema do contexto
  const [produtos, setProdutos] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    async function carregarProdutos() {
      try {
        setInterval(async()=>{
          const produtosData = await filtrarhoras();
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
    <View style={[estilo.container, { backgroundColor: theme === "daltonic" ? "#AABBCC" : "#191924" }]}>
      <View style={estilo.filtroTitulo}>
        <Text style={estilo.titulo}>Serviços disponíveis</Text>
      </View>
      <FlatList
        style={{ marginBottom: 70 }}
        data={filteredProducts.length > 0 ? filteredProducts : produtos}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}
        renderItem={({ item }) => (
          <Produto nome={item.titulo} id={item.id} destino={item.destinoEntrega} cep={item.cepProduto} />
        )}
      />
    </View>
  );
}
