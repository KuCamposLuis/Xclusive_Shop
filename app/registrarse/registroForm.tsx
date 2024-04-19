'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { cliente } from '@/models/types';
import postRegistro from './postRegistro';

export default function RegistroUsuario() {
  const [nombre, setnombre] = useState('');
  const [apellido, setapellido] = useState('');
  const [correoElectronico, setcorreoElectronico] = useState('');
  const [nombreUsuario, setnombreUsuario] = useState('');
  const [direccion, setdireccion] = useState('');
  const [contraseña, setcontraseña] = useState('');
  const [telefono, settelefono] = useState('');
  const idRol = 2;

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userData: cliente = {
        nombre: nombre,
        apellido: apellido,
        direccion: direccion, // Asegúrate de tener un estado para 'direccion'
        telefono: telefono,
        idUsuarioNavigation: {
          nombreUsuario: nombreUsuario,
          contraseña: contraseña,
          correoElectronico: correoElectronico,
          idRol: idRol,
        },
      };
      const user = await postRegistro(userData);
      if (user) {
        alert('Usuario registrado con éxito');
        window.location.href = '/';
      }
    } catch (error) {
      console.error('Error al registrar', error);
    }
  };

  return (
    <div className="flex h-fit flex-col items-center justify-center py-1">
      <form
        className="flex flex-col gap-1 rounded-lg px-10 py-1 shadow-lg"
        onSubmit={handleFormSubmit}
      >
        <h1 className=" text-center text-xl font-medium">Registro</h1>
        <label>Email</label>
        <input
          type="text"
          className="mb-2 w-[300px] rounded-lg border-[1px] border-gray-300 p-2 text-black focus:border-gray-600 focus:outline-none"
          id="Correo Electronico"
          value={correoElectronico}
          placeholder="Correo electronico"
          onChange={(e) => setcorreoElectronico(e.target.value)}
        />
        <label>Contraseña</label>
        <input
          type="password"
          className="mb-2 w-[300px] rounded-lg border-[1px] border-gray-300 p-2 text-black focus:border-gray-600 focus:outline-none"
          id="password"
          value={contraseña}
          placeholder="inserte su contraseña"
          onChange={(e) => setcontraseña(e.target.value)}
        />
        <label>Nombre de Usuario</label>
        <input
          type="text"
          className="mb-2 w-[300px] rounded-lg border-[1px] border-gray-300 p-2  text-black focus:border-gray-600 focus:outline-none"
          id="nombreUsuario"
          value={nombreUsuario}
          placeholder="Inserte su Nombre de Usuario"
          onChange={(e) => setnombreUsuario(e.target.value)}
        />
        <label>Nombre</label>
        <input
          type="text"
          className="mb-2 w-[300px] rounded-lg border-[1px] border-gray-300 p-2  text-black focus:border-gray-600 focus:outline-none"
          id="nombre"
          value={nombre}
          placeholder="Inserte su nombre"
          onChange={(e) => setnombre(e.target.value)}
        />
        <label>Apellido</label>
        <input
          type="text"
          className="mb-2 w-[300px] rounded-lg border-[1px] border-gray-300 p-2  text-black focus:border-gray-600 focus:outline-none"
          id="apellido"
          value={apellido}
          placeholder="Inserte su apellido"
          onChange={(e) => setapellido(e.target.value)}
        />
        <label>Numero telefonico</label>
        <input
          type="text"
          className="mb-2 w-[300px] rounded-lg border-[1px] border-gray-300 p-2  text-black focus:border-gray-600 focus:outline-none"
          id="telefono"
          value={telefono}
          placeholder="Inserte su numero telefonico"
          onChange={(e) => settelefono(e.target.value)}
        />
        <label>Dirección</label>
        <input
          type="text"
          className="mb-2 w-[300px] rounded-lg border-[1px] border-gray-300 p-2  text-black focus:border-gray-600 focus:outline-none"
          id="direccion"
          value={direccion}
          placeholder="Inserte su dirección"
          onChange={(e) => setdireccion(e.target.value)}
        />
        <div className="flex justify-center">
          <button
            type="submit"
            className="mb-2 flex rounded-md border-gray-300 bg-purple-600 p-2 text-white focus:border-gray-600 focus:outline-none"
          >
            Registrarse Ahora
          </button>
        </div>
      </form>
      <div className="flex flex-col justify-center">
        <p className="mt-5 text-center text-sm text-neutral-600">
          ¿Ya tienes una cuenta?
        </p>
        <Link href="/signin" className="mt-2 text-center">
          Iniciar sesión
        </Link>
      </div>
    </div>
  );
}
