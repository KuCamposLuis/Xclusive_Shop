'use server';
import axios from 'axios';
import { Cotizacion } from '../Components/connection/type';


export default async function GetCotizacionesCliente() {
    try {
        const response = await axios.get<Cotizacion[]>(
            'http://www.xclusivedesigns.somee.com/api/Cotizacion', {
            headers: {
                'Content-Type': 'application/json',
            },
            }
        );
        console.log('Cotizaion');
        console.log(response.data);

        return response.data;
    } catch (error) {
        console.error(error);
    }
}