import axios from "axios";
import { MEU_IP } from "../../config";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../config/firebase.config";
import { getAuth } from "firebase/auth";

// Funcao responsavel por listar todos os produtos.

export default async function getProdutos() {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const user = auth.currentUser;
  try {
    // Define a URL da API que você deseja acessar
    const apiUrl = `${MEU_IP}/api/produto/lista/${user.uid}`;

    // Faz uma requisição GET para a API usando o Axios
    const response = await axios.get(apiUrl);

    // Retorna os dados da resposta da API
    return response.data;
  } catch (error) {
    console.log("Problema do axios: " + error);
    throw error;
  }
}
