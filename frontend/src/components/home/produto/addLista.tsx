import axios from 'axios';
import { MEU_IP } from '../../../config/index';
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../../config/firebase.config';

export default async function addToLista(id){

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app)
    const user = auth.currentUser;


    const data={
        identificadoUsuario:user.uid,
        produtoId:id
    }
    try {

         //Verificar antes se o produto já existe:

        // Define a URL da API que você deseja acessar
        const api = `${MEU_IP}/api/produto/lista/${user.uid}`;
    
        // Faz uma requisição GET para a API usando o Axios
        const responseApi = await axios.get(api);
    
        // Retorna os dados da resposta da API
        const produtosEListaDesejo = responseApi.data;
    
        const produtoExistente = produtosEListaDesejo.find((item) => item.produto.id === id);
        if (produtoExistente) {
          // O produto já existe na lista de desejos, você pode retornar ou tomar alguma ação apropriada
          return { status: 'Produto já existe na lista de desejos' };
        }
    
        const apiUrl = `${MEU_IP}/api/produto/lista`;
    
        const response = await axios.post(apiUrl, data);
    
        return response.data;
      } catch (error) {
        console.log('Problema do axios: ' + error);
        throw error;
      }
    }
