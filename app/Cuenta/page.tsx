'use client';
import GetUser from './getUser';
import { cliente } from '@/models/types';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Navbar from '../Components/navbar';

export default function Page() {
  const [clienteInfo, setClienteInfo] = useState<cliente | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = localStorage.getItem('IdCliente');
        if (userId) {
          const clienteData = await GetUser(parseInt(userId));
          setClienteInfo(clienteData);
        }
      } catch (error) {
        console.error('Error al obtener usuario', error);
      }
    };
    fetchData();
  }, []);

  const isCliente: boolean = !!clienteInfo;

  return (
    <>
      <Navbar />
      {isCliente ? (
        <div className="flex w-screen justify-center">
          <div className="mt-5 flex h-fit w-3/4 flex-col items-center gap-1 self-center rounded-lg bg-[#e7dfd9] px-10 py-5 shadow-lg shadow-[#ecae7e]">
            <h1 className="pb-3 text-3xl font-bold italic">
              Información del usuario
            </h1>
            {clienteInfo && (
              <div className="flex flex-col gap-5">
                <p>Nombre: {clienteInfo.nombre}</p>
                <p>Apellido: {clienteInfo.apellido}</p>
                <p>
                  Correo: {clienteInfo.idUsuarioNavigation.correoElectronico}
                </p>
                <p>
                  Nombre de usuario:{' '}
                  {clienteInfo.idUsuarioNavigation.nombreUsuario}
                </p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center gap-2">
          <p> Debes ingresar con una cuenta</p>
          <Link href="/">
            <b className="sbg-purple-500 rounded-md px-5 py-2 text-white">
              Regresar a inicio
            </b>
          </Link>
        </div>
      )}
    </>
  );
}
