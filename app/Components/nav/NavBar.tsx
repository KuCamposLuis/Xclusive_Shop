'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { BsChevronCompactUp, BsCart } from 'react-icons/bs';

import LongOut from './longOut';
// import GetCotizacionesPendientes from '@/app/api/getCotizacionesPendientes';
import SearchBar from '../searchBar';
import GetCotizacionId from '@/app/api/getCotizacionId';
import { Cotizacion } from '../connection/type';
import GetCotizacionesCliente from '@/app/api/getCotizacionCliente';

let name: string;
let lastName: string;
let clientId: string;
let idCotizacion: string;
if (typeof window !== 'undefined') {
  name = localStorage.getItem('name') as string;
  lastName = localStorage.getItem('lastName') as string;
  clientId = localStorage.getItem('IdCliente') as string;
  idCotizacion = localStorage.getItem('idCotizacion') as string;
}




const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showNav, setShowNav] = useState<boolean>(false);
  // const [cotizacionesPendientes, setcotizacionesPendientes] = useState<Cotizacion[] | undefined>([]);
  const [cotizacionesPendientes, setcotizacionesPendientes] = useState<Cotizacion | undefined>()
  const idCotizacionInt = parseInt(idCotizacion);
  console.log('idCotizacionInt', idCotizacionInt);  
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  function mostrarMensaje(): void {
    alert('Inicia sesión o crea una cuenta para poder cotizar');
  }

  useEffect(() => {
    const fetchCotizacion = async () => {
      try {
        const cotizacionCurso = await GetCotizacionId(idCotizacionInt);
        setcotizacionesPendientes(cotizacionCurso);
      } catch (error) {
        console.error('Error al obtener las compras:', error);
      }
    }
    fetchCotizacion();
  })
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const productos = await GetCotizacionesCliente()
  //       setcotizacionesPendientes(productos);
  //     } catch (error) {
  //       console.error('Error al obtener las compras:', error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <div>
      <div className="sticky top-0 z-50 w-full" style={{ background: '#ffffff' }}>
        <div className="top-0 flex w-full items-center justify-between border-b-[1px] py-4">
          <div className="flex items-center md:space-x-10 lg:space-x-20">
            <div className="text-2xl font-semibold">
              <a href="/">XCLUSIVE SHOP</a>
            </div>
            <div>
              <SearchBar />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <nav className="max-md:hidden">
              <ul className="flex items-end space-x-7 text-[15px] opacity-70 lg:space-x-10">
                {!localStorage.length ? (
                  <>
                    <li>
                      <Link href="/Login" className="inline-block w-full py-3">
                        Iniciar sesion
                      </Link>
                    </li>
                    <li>
                      <Link href="/registrarse" className="inline-block w-full py-3">
                        Crear cuenta
                      </Link>
                    </li>
                    <li>
                      <Link href={localStorage.length ? '/Cotizar' : ''} className="inline-block w-full py-3" onClick={() => mostrarMensaje()}>
                        Cotizar
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <a href="/" className="inline-block w-full py-3">
                        Shop
                      </a>
                    </li>
                    <li>
                      <a href="filters" className="inline-block w-full py-3">
                        Filters
                      </a>
                    </li>
                    <li>
                      <Link href='/dashboard/Cotizaciones'>
                        <span className='inline-block w-full py-3'>Mis Cotizaciones</span>
                      </Link>
                    </li>
                    <li>
                      <p>{name}</p>
                      <p>{lastName}</p>
                    </li>
                    <li>
                      <button className="inline-block w-full py-3" onClick={openModal}>
                        Carrito <BsCart />
                      </button>
                    </li>
                    <li>
                  <LongOut />
                </li>
                  </>
                )}
              </ul>
            </nav>
            <span onClick={() => setShowNav(!showNav)} className="rounded-full bg-gray-100 p-[9px] md:hidden">
              <BsChevronCompactUp className={`transition duration-150 ease-in ${showNav ? 'rotate-180' : '0'}`} />
            </span>
          </div>
        </div>
      </div>

      <div>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={(e) => { if (e.target === e.currentTarget) { closeModal(); } }}>
            <div className="absolute right-0 top-0 h-full w-1/4 bg-white p-6 shadow-md">
              <div className="flex justify-between">
                <p>COTIZACIONES</p>
                <button onClick={closeModal} className="m-2 h-5 w-5 rounded text-lg text-gray-500 hover:bg-gray-700 hover:text-white">
                  X
                </button>
              </div>
              <div>
                {cotizacionesPendientes && (
                  <div>{cotizacionesPendientes.cotizacionProducto.map((producto) => (
                    <>
                      <div>{producto.nombreProducto}</div>
                      <div>{producto.cantidad}</div>
                      <div>{producto.color}</div>
                    </>
                  ))}</div>
                )}
              {/* {cotizacionesPendientes && cotizacionesPendientes.map((cotizacion) => (
                  <div className="bg-slate-300 px-2 py-1">
                    <p>{cotizacion.idCliente}</p>
                    <p>{cotizacion.idClienteNavigation.nombre}</p>
                    <p>{cotizacion.estado}</p>
                    {cotizacion.cotizacionProducto.map((producto) => (
                      <div>
                        <p>{producto.nombreProducto}</p>
                        <p>{producto.color}</p>
                        <p>{producto.talla}</p>
                      </div>
                    ))}
                  </div>
                ))} */}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;