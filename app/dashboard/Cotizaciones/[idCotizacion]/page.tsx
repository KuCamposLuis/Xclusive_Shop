'use client';
import getByIdCotizacion from "@/app/Components/connection/getByIdCotizacion";
import { Cotizacion } from "@/app/Components/connection/type";
import Navbar from "@/app/Components/navbar";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";


export default function PageCotizacion() {
    const [cotizacion, setCotizacion] = useState<Cotizacion>();
    const { idCotizacion } = useParams<({idCotizacion?: string})>()

    useEffect (() => {
        if(typeof idCotizacion === 'string') {
            const idCotizacionInt = Number(idCotizacion);
            if(!isNaN(idCotizacionInt)) {
                getByIdCotizacion(idCotizacionInt).then((cotizacion) => { 
                    setCotizacion(cotizacion);
                    console.log('Cotizacion obtenida con exito:', cotizacion);
                })
            }
        }
    }, [idCotizacion])

    return (
        <div>
            <Navbar/>
            <div className="h-screen flex flex-col p-2">
                <div className="flex flex-col">
                    <p>{cotizacion?.idCliente}</p>
                    <p>{cotizacion?.idCotizacion}</p>
                    <div className="">
                        {cotizacion?.cotizacionProducto.map((prodcuto) => (
                            <div key={prodcuto.idCotizacionProducto}>
                                <p>{prodcuto.materialProducto}</p>
                                <p>{prodcuto.cantidad}</p>
                                <p>{prodcuto.nombreProducto}</p>
                                
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )   
}