'use server';
import axios from 'axios';
import { defaultMaxListeners } from 'events';

const urlCotizaciones = 'http://www.xclusivedesigns.somee.com/api/Cotizacion'

export default async function GetCotizaciones() {
  try {
      const response = await axios.get(urlCotizaciones, {
          headers: {
              'Content-Type': 'application/json',
          },
      });
      console.log('Cotizaion');
      console.log(response.data);

      return response.data;
  } catch (error) {
      console.error('hubo un problema con trare las cotizaciones',error);
  }
}