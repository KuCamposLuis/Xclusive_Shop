'use client';
import { lusitana } from '@/app/ui/fonts';
import { AtSymbolIcon, KeyIcon } from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { signIn } from 'next-auth/react';
import loginApi from './loginApi';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event:  React.FormEvent) => {
    event.preventDefault();
    try {
      const credentials = {
        correoElectronico: email,
        contraseña: password
      }
      if(!email || !password) {
        return alert('Por favor, rellene todos los campos');
      }
      const tokens = await loginApi(credentials);
      if (tokens) {

        // Guardar los tokens en localStorage
        localStorage.setItem('token', JSON.stringify(tokens));
        localStorage.setItem('name', tokens.name);
        localStorage.setItem('lastName', tokens.lastName);
        const idCliente = parseInt(tokens.IdCliente)
        localStorage.setItem('IdCliente', idCliente.toString());
      
        console.log('los tokens del usuario son', tokens);
        console.log('el id del cliente es', idCliente);
      
        if (tokens.name === tokens.name) {
          router.push('/');
        }
      } else {
        alert('No se pudo obtener los tokens del usuario');
      } 
    } catch  (error) {
      alert('Correo electronico o contraseña incorrectos');
    }
  }
  // const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   try {
  //     await signIn('credentials', {
  //       email,
  //       password,

  //       redirect: false,
  //       callbackUrl: '/Cotizar',
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <div className="flex h-screen items-center justify-center bg-cover bg-center bg-no-repeat">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm space-y-6 rounded-lg bg-white p-6 shadow-md"
      >
        <h1
          className={`${lusitana.className} mb-6 text-center text-2xl font-bold`}
        >
          Inicia Sesión con Xclusive Shop
        </h1>
        <div>
          <label
            htmlFor="email"
            className="mb-1 block text-xs font-medium text-gray-900"
          >
            Correo Electrónico
          </label>
          <div className="relative">
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Introduce tu correo electrónico"
              required
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm placeholder-gray-500 outline-none"
            />
            <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          </div>
        </div>
        <div>
          <label
            htmlFor="password"
            className="mb-1 block text-xs font-medium text-gray-900"
          >
            Contraseña
          </label>
          <div className="relative">
            <input
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Introduce tu contraseña"
              required
              minLength={6}
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm placeholder-gray-500 outline-none"
            />
            <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          </div>
        </div>
        <div>
          <LoginButton />
        </div>
      </form>
    </div>
  );
}

function LoginButton() {
  return (
    <button
      type="submit"
      className="w-full rounded-md bg-gray-800 py-2 text-white hover:bg-gray-700"
    >
      Iniciar Sesión <ArrowRightIcon className="ml-auto h-5 w-5" />
    </button>
  );
}
