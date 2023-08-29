import axios from 'axios';
import { MEU_IP } from '../../config';

export default async function cadastrarPerfil(data) {

    try {
        const apiUrl = `${MEU_IP}/api/usuario`;

        const response = await axios.post(apiUrl, data);

        return response.data;
    } catch (error) {
        console.log("Problema do axios: "+ error)
        throw error;
    }

}