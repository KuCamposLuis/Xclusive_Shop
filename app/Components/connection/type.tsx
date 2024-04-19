export interface ImagenCotizacion {
    idImagenCotizacion: number;
    urlImagenCotizacion: string;
    idCotizacionProducto: number;
  }
  
  export interface CotizacionProducto {
    idCotizacionProducto: number;
    idCotizacion: number;
    nombreProducto: string;
    materialProducto: string;
    color: string;
    talla: string;
    tamaño: string;
    cantidad: number;
    subtotal: number;
    notas: string;
    estado: string;
    images: ImagenCotizacion[];
  }
  
  export interface DetalleCotizacion {
    idDetalleCotizacion: number;
    idCotizacion: number;
    fechaCotizacion: string;
    fechaVencimiento: string;
    subtotal: number;
  }
  
  export interface ClienteNavigation {
    idCliente: number;
    nombre: string;
    apellido: string;
  }
  
  export interface Cotizacion {
    idCotizacion: number;
    idCliente: number;
    estado: string;
    activo: boolean;
    total: number | null;
    idClienteNavigation: ClienteNavigation;
    cotizacionProducto: CotizacionProducto[];
    detalleCotizacion: DetalleCotizacion[];
}
