import axios from 'axios';
import { MEU_IP } from '../../config';

export default async function signIn(novoUsuario) {
  try {
    const apiUrl = `${MEU_IP}/api/usuario`;
    
    // Faz uma requisição POST para criar um novo produto
    const response = await axios.post(apiUrl, novoUsuario);

    // Retorna os dados da resposta da API (por exemplo, o produto recém-criado)
    return response.data;
  } catch (error) {
    console.log("Problema do axios: " + error);
    throw error;
  }
}