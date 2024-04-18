
import React, { useState } from 'react';
import Link from 'next/link';
import loginApi from './loginApi';
type Props = {};

const loginUsuario = (props: Props) => {
  const [correoElectronico, setcorreoElectronico] = useState('');
  const [contraseña, setcontraseña] = useState('');

  const userLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const user = {
        correoElectronico: correoElectronico,
        contraseña: contraseña,
      };
      const session = await loginApi(user);
      
      alert('Secion Iniciada con éxito');
    } catch (error) {
      console.error('Error al iniciar sesion', error);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <form
        className="flex flex-col rounded-lg bg-white p-10 shadow-lg"
        onSubmit={userLogin}
      >
        <h1 className="mb-4 text-xl font-medium">Iniciar Sesión</h1>
        <label htmlFor="" className="mb-2">
          Correo
        </label>
        <input
          type="text"
          className="mb-4 w-[300px] rounded-lg border-[1px] border-gray-300 p-2 text-black focus:border-gray-600 focus:outline-none"
          id="correo"
          value={correoElectronico}
          placeholder="Correo electronico"
          onChange={(e) => setcorreoElectronico(e.target.value)}
        />
        <label htmlFor="" className="mb-2">
          Contraseña
        </label>
        <input
          type="password"
          className="mb-4 w-[300px] rounded-lg border-[1px] border-gray-300 p-2 text-black focus:border-gray-600 focus:outline-none"
          id="password"
          value={contraseña}
          placeholder="Contraseña"
          onChange={(e) => setcontraseña(e.target.value)}
        />
        <button
          type="submit"
          className="mb-4 mt-2 border border-gray-300 bg-purple-600 p-2 text-white focus:border-gray-600 focus:outline-none"
        >
          Iniciar Sesión
        </button>
        <Link
          href="/registrarse"
          className="mt-5 text-center text-sm text-neutral-600"
        >
          No tengo una cuenta
        </Link>
        <Link href="/" className="mt-2 text-center">
          Home
        </Link>
      </form>
    </div>
  );
};

export default loginUsuario;
