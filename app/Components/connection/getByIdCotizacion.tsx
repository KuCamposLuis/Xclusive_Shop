'use server';
import axios from "axios";

const getBiIdCotizacion = async (idCotizacion: number) => {
    try {
        const cotizacion = await axios.get(`http://www.xclusivedesigns.somee.com/api/Cotizacion/${idCotizacion}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if(cotizacion.status === 200) {
            console.log('Cotizacion obtenida con exito:', cotizacion.data);
        } 
        return cotizacion.data;
    } catch (error) {
        console.error('Error al obtener la cotizacion:', error);
    }
}

export default getBiIdCotizacion;