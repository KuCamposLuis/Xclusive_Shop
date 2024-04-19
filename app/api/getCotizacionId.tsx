'use server';
import axios from 'axios';
import { Cotizacion } from '../Components/connection/type';

export default async function GetCotizacionId(idCotizacion: number) {
    try {
        const cotizacion = await axios.get<Cotizacion>(`http://www.xclusivedesigns.somee.com/api/Cotizacion/${idCotizacion}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log('Cotizacion', cotizacion.data);
        return cotizacion.data;
    } catch (error) {
        console.error(error);
    }
}