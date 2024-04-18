'use server';
import axios from 'axios';
import { cookies } from 'next/headers';

import { decode } from 'jsonwebtoken';
// import Cookies from "js-cookie"; // Importar Cookies desde js-cookie

type Credentials = {
  correoElectronico: string;
  contraseña: string;
};

const apiloginURL =
  'http://www.xclusivedesigns.somee.com/api/Cliente/iniciarSesion';

const loginApi = async (credentials: Credentials) => {
  console.log('DENTRO DEL POST LOGIN');
  const oneDayInSeconds = 24 * 60 * 60;
  const loginData = {
    correoElectronico: credentials.correoElectronico, // Asegurar que el campo sea 'correoElectronico'
    contraseña: credentials.contraseña,
  };
  try {
    const response = await axios.post(apiloginURL, loginData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response.data);
    const token = response.data;

    if (response.status === 200) {
      const decodedToken = decode(response.data);
      console.log(decodedToken);
      if (
        decodedToken &&
        typeof decodedToken === 'object' &&
        decodedToken.hasOwnProperty(
          'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name',
        ) &&
        decodedToken.hasOwnProperty(
          'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress',
        ) &&
        decodedToken.hasOwnProperty(
          'IdCliente'
        )
      ) {
        const name =
          decodedToken[
            'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'
          ];
        const lastName =
          decodedToken[
            'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'
          ];
        const IdCliente = decodedToken['IdCliente'];
        // Utilizar Cookies de js-cookie para establecer y obtener cookies
        cookies().set('token', JSON.stringify(decodedToken), {
          expires: oneDayInSeconds,
        });
        const cookie = cookies().get('token');
        console.log('cookie', cookie);
        return { tokens: response.data, name: name, lastName: lastName, IdCliente: IdCliente};
      }
    } else {
      throw new Error('Correo electrónico o contraseña incorrectos');
    }
  } catch (error) {
    throw error;
  }
};

export default loginApi;
