export interface PostCotizacionDetalles {
    idCotizacion: number,
    idCliente: number,
    estado: string,
    activo: boolean,
    total: number,
    idClienteNavigation: null,
    cotizacionProducto: [],
    detalleCotizacion: []
}