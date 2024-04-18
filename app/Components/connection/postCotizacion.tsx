'use server'
import axios from 'axios';
import { number } from 'zod';

const apiPosUrl = 'http://www.xclusivedesigns.somee.com/api/Cotizacion';

const postCotizacion = async (idCliente : number) => {
    const data = {
        idCliente: idCliente ,
    }
    try {
        const response = await axios.post(apiPosUrl, data, {
        headers: {
            'Content-Type': 'application/json',
        },
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export default postCotizacion;