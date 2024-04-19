'use client';
import { Cotizacion } from "@/app/Components/connection/type";
import Navbar from "@/app/Components/navbar";
import GetCotizaciones from "@/app/api/getCotizaciones";
import { useEffect, useState } from "react";
import CardCotizacion from "./cardCotizacion";

const Page = () => {
    return (
        <div className="flex flex-col items-start w-screen">
            <Navbar/>
            <CardCotizacion/>
        </div>
    );
}

export default Page;