import axios from 'axios';

export default async function getUser(idCliente: number) {
  try {
    const clienteData = await axios.get(
      `http://www.xclusivedesigns.somee.com/api/Cliente/${idCliente}`,
    );
    console.log(clienteData);
    return clienteData.data;
  } catch (error) {
    console.error('Error al obtener usuario', error);
  }
}
