import axios from 'axios';
import { MEU_IP } from '../../config';

// Função responsável por listar os produtos filtrados por ID.
async function filtrarProdutos(id) {
  try {
    // Define a URL da API que você deseja acessar
    const apiUrl = `${MEU_IP}/api/produto/${id}`;
    
    // Faz uma requisição GET para a API usando o Axios
    const response = await axios.get(apiUrl);

    // Retorna os dados da resposta da API
    return response.data;
  } catch (error) {
    throw error;
  }
}

export default filtrarProdutos;
