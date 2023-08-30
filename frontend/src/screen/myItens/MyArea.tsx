// import React from "react";
// import { View, Text } from "react-native";

// export function MyItens() {
    
    
//   return (
//    <View>
//        <Text>
//            Aqui coloca a tela onde o usuário pode ver os produtos dele
//        </Text>
//    </View>
//   );
// }
import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from 'react-native';
import filtrarhoras from "../../services/filtrarhoras/filtrarhoras";
import ProductListScreen from './../../components/Filtrarhora/index';
import estilo from "./Styles";

import { Produto } from "../../components/hora/index";



// Pagina home, primeira página mostrada ao cliente logado, mostra todos os produtos.

export function MyItens() {
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
    <View style={estilo.container}>

      <View style={estilo.filtroTitulo}>
        <Text style={estilo.titulo}>Serviços disponiveis</Text>
        {/* <ProductListScreen updateFilteredProducts={updateFilteredProducts} /> */}
      </View>
        <FlatList style={{
          marginBottom: 70
        }}
          data={filteredProducts.length > 0 ? filteredProducts : produtos}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }} // Centraliza verticalmente
          renderItem={({ item }) => (
              <Produto nome={item.titulo} id={item.id} destino={item.destinoEntrega}/>
          )}
        />
      </View>
  );
}
