'use server';
import axios from 'axios';

export default async function GetCotizacionesPendientes(cotizacionId: string) {
  try {
    const response = await axios.get(
      `http://www.xclusivedesigns.somee.com/api/Cotizacion/${cotizacionId}`,
    );
    console.log('COTIZACIONES');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
