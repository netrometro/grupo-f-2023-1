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
        const apiUrl = `${MEU_IP}/api/produto/lista`;

        const response = await axios.post(apiUrl, data);

        return response.data;
    } catch (error) {
        console.log("Problema do axios: "+ error)
        throw error;
    }
}