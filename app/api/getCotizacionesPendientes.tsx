// 'use server';
// import axios from 'axios';
// import GetCotizaciones from './getCotizaciones';
// import { resolve } from 'styled-jsx/css';

// export default async function GetCotizacionesPendientes(clientId: string) {
//   try {
//     const response = await axios.get(
//       `http://www.xclusivedesigns.somee.com/api/Cliente/clientes/${clientId}/cotizaciones?estado=Pendiente`,
//     );
//     console.log('PENDINTES');
//     console.log(response.data);

//     const cotizacionesPromises = response.data.map(async (cotizacion: any) => {
//       try {
//         const cotizacionData = await GetCotizaciones(cotizacion.idCotizacion);
//         return cotizacionData;
//       } catch (error) {
//         console.error('Error al obtener detalles de cotización:', error);
//         return null;
//       }
//     });

//     const cotizaciones = await Promise.all(cotizacionesPromises);

//     console.log('RES');
//     console.log(cotizaciones);
//     return cotizaciones.filter((cotizacion) => cotizacion !== null);
//   } catch (error) {
//     console.error(error);
//   }
// }
