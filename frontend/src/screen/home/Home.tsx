import React, { useEffect, useState } from "react";

import { Text, View } from 'react-native';
import listarProdutos from "../../services/listarProdutos/listarProdutos";

// Pagina home, primeira página mostrada ao cliente logado, mostra todos os produtos.

export function Home() {
    
    // Parte reponsavel carregar os produtos, usando a funcao listarProdutos.

    const [produtos, setProdutos] = useState([]);
    
    useEffect(() => {
        async function carregarProdutos() {
            try {
                const produtosData = await listarProdutos();
                setProdutos(produtosData);
            } catch (error) {
                console.log("Passou2")
                console.error('Erro ao carregar produtos:', error);
        }
      }
  
      carregarProdutos();
    }, []);

    
  return (
    <>
      <Text>
        TESTE
      </Text>
    </>
  );
}