import axios from 'axios';
import { Platform } from 'react-native';
//Platform é para identificar em qual ambiente estamos executando

// IP LOCAL PADRÃO do Android é 10.8.2.2
export const API_BASE_URL = Platform.OS === 'android' ?
    'http://10.0.2.2:3000' : 'http://localhost:3000'

const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000, //define que a requisição pode esperar até no másimo 10 seg
    headers: {
        'Content-Type': 'application/json', //eviando json
        Accept: 'application/json' //esperando resposta em json
    }
})

export default api;