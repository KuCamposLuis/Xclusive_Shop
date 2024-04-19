import { Cotizacion } from "@/app/Components/connection/type";
import GetCotizaciones from "@/app/api/getCotizaciones";
import { useEffect, useState } from "react";
import Image from 'next/image';
import Link from "next/link";
import { handleInspectButton } from "@/app/Components/connection/onClick";

const CardCotizacion = () => {
    const idCliente = localStorage.getItem('IdCliente');
    const [cotizaciones, setCotizaciones] = useState<Cotizacion[]>([]);
    const [estadoFiltrado, setEstadoFiltrado] = useState<string>();
    const [selectedCotizacion, setSelectedCotizacion] = useState<string>();
    useEffect(() => {
        const fetchCotizacion = async () => {
            try {
                const cotizaciones = await GetCotizaciones();
                // const idCliente = localStorage.getItem('IdCliente');
                setCotizaciones(cotizaciones);
                console.log(cotizaciones);
            } catch (error) {
                console.error('Error al obtener las cotizaciones:', error);
            
            }
        }
        fetchCotizacion();
    }, [])

    let cotizcionesFiltradas = cotizaciones.filter((cotizacion) => cotizacion.idCliente === Number(idCliente));
    if(estadoFiltrado) {
        cotizcionesFiltradas = cotizcionesFiltradas.filter((cotizacion) => cotizacion.estado === estadoFiltrado);
    }
    return (
        <div className="w-screen">
            <div className="h-14 border-2 border-b-gray-800 flex flex-row justify-around items-center">
                <button onClick={() => setEstadoFiltrado('Pendiente')}>Pendientes</button>
                <button onClick={() => setEstadoFiltrado('Pedido')}>Pedidos</button>
            </div>
            {estadoFiltrado ?
            <div className="mt-4">
            {cotizcionesFiltradas && cotizcionesFiltradas.map((cotizacion) => (
                <div key={cotizacion.idCotizacion} className="mt-2 border-2 border-b-gray-400 flex flex-col h-1/2 px-4 ">
                    <div className="flex flex-row gap-2 text-lg font-semibold">
                        <span>Cotizacion: {cotizacion.idCotizacion}</span>
                        <span >Estatus: {cotizacion.estado}</span>
                        <div className="flex flex-col px-2 items-center justify-center">
                            <Link href='/Cotizaciones/[idCotizacion]' as={`Cotizaciones/${cotizacion.idCotizacion}`}
                            onClick={() => {
                                handleInspectButton(cotizacion.idCotizacion);
                            }}>
                                <button className="rounded-xl w-auto items-center justify-center bg-blue-400 hover:bg-blue-600 cursor-pointer p-2">
                                    <span className="font-medium text-black hover:text-white">Inspeccionar</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                    {cotizacion.cotizacionProducto.map((producto) => (
                        <div key={producto.idCotizacionProducto} className="flex flex-row h-1/2 px-4 mt-2">
                            {producto.images.map((imagenProducto) => (
                                <div className="flex items-center object-cover rounded w-1/4 h-52 relative">
                                <Image
                                    src={imagenProducto.urlImagenCotizacion}
                                    alt="User"
                                    layout="fill"
                                    objectFit="cover"
                                    className="object-cover rounded-md" // Ensure image fits within dimensions
                                />
                            </div>
                            ))}
                            <div className="flex flex-col py-4 px-2 items-start justify-start w-1/2">
                                <span className="flex flex-wrap text-base">Nombre: <p className="font-medium ">{producto.nombreProducto}</p></span>
                                <span className="flex flex-wrap text-base">Nota: <p className="font-medium">{producto.notas}</p></span>
                            </div>
                            <div className="flex flex-col py-4 items-center justify-center w-1/4">
                                {/* <span className="flex flex-wrap text-base">Estatus: <p className="font-medium">{}</p></span> */}
                                <span className="flex flex-wrap text-base">Cantidad: <p className="font-medium">{producto.cantidad}</p></span>
                            </div>                                
                        
                        </div>
                        
                    ))}
                    
                </div>
            ))}
        </div> 
            :
            <div className="mt-4">
                {cotizcionesFiltradas && cotizcionesFiltradas.map((cotizacion) => (
                    <div key={cotizacion.idCotizacion} className="mt-2 border-2 border-b-gray-400 flex flex-col h-1/2 px-4 ">
                        <div className="flex flex-row gap-2 text-lg font-semibold">
                            <span>Cotizacion: {cotizacion.idCotizacion}</span>
                            <span >Estatus: {cotizacion.estado}</span>
                            <div className="flex flex-col px-2 items-center justify-center">
                                <Link href='/Cotizaciones/[idCotizacion]' as={`Cotizaciones/${cotizacion.idCotizacion}`}
                                onClick={() => {
                                    handleInspectButton(cotizacion.idCotizacion);
                                }}>
                                    <button className="rounded-xl w-auto items-center justify-center bg-blue-400 hover:bg-blue-600 cursor-pointer p-2">
                                        <span className="font-medium text-black hover:text-white">Inspeccionar</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        {cotizacion.cotizacionProducto.map((producto) => (
                            <div key={producto.idCotizacionProducto} className="flex flex-row h-1/2 px-4 mt-2">
                                {producto.images.map((imagenProducto) => (
                                    <div className="flex items-center object-cover rounded w-1/4 h-52 relative">
                                    <Image
                                        src={imagenProducto.urlImagenCotizacion}
                                        alt="User"
                                        layout="fill"
                                        objectFit="cover"
                                        className="object-cover rounded-md" // Ensure image fits within dimensions
                                    />
                                </div>
                                ))}
                                <div className="flex flex-col py-4 px-2 items-start justify-start w-1/2">
                                    <span className="flex flex-wrap text-base">Nombre: <p className="font-medium ">{producto.nombreProducto}</p></span>
                                    <span className="flex flex-wrap text-base">Nota: <p className="font-medium">{producto.notas}</p></span>
                                </div>
                                <div className="flex flex-col py-4 items-center justify-center w-1/4">
                                    {/* <span className="flex flex-wrap text-base">Estatus: <p className="font-medium">{}</p></span> */}
                                    <span className="flex flex-wrap text-base">Cantidad: <p className="font-medium">{producto.cantidad}</p></span>
                                </div>                                
                            
                            </div>
                            
                        ))}
                        
                    </div>
                ))}
            </div>
        }
            
            {/* <div className="w-screen h-screen">
                <div className="w-full h-1/2 bg-red-500"></div>
                <div className="w-full h-1/2 bg-blue-500"></div>
            </div> */}
        </div>
    )
}

export default CardCotizacion