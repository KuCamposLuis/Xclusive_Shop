'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import SearchBar from './searchBar';
import LongOut from './nav/longOut';
import postCotizacion from './connection/postCotizacion';


type Props = {};

const Navbar = (props: Props) => {
  const [showProfile, setShowProfile] = useState<boolean>(false);
  const [showNav, setShowNav] = useState<boolean>(false);
  const token = localStorage.getItem('token');
  const name = localStorage.getItem('name');
  const idCliente = localStorage.getItem('IdCliente');
  const [cotizacionData, setCotizacionData] = useState(null);
  const handleLogout = () => {
    // Aquí va tu código para cerrar la sesión, por ejemplo:
    localStorage.removeItem('token');
    localStorage.clear();
    window.location.href = '/';
  };
  
  const handleCotizacion = async () => {
    if (idCliente) {
      const id = parseInt(idCliente);
      const response = await postCotizacion(id);
      setCotizacionData(response);
      const idCotizacion = response.idCotizacion;
      localStorage.setItem('idCotizacion', idCotizacion);
      console.log('el id de la cotizacion es', idCotizacion);
      console.log('cotizacion hecha con exito', response);
    }
  }
  //const {data:session} = useSession()
  // console.log(session?.user)

  // const SignOut = () => {
  //     if(session && session.user){
  //         return(
  //             <ul className='py-5 px-1 text-neutral-600'>
  //                 <li className='hover:bg-gray-100 hover:text-neutral-900 px-5 py-2 cursor-pointer'>{session.user.name}</li>
  //                 <li onClick={() => signOut()} className='whitespace-nowrap hover:text-red-600 px-5 py-2 cursor-pointer'>SignOut</li>
  //                 <li className='whitespace-nowrap hover:bg-gray-100 hover:text-neutral-900 px-5 py-2 cursor-pointer'><a href="/addproduct">Add Product</a></li>
  //             </ul>
  //         )
  //     }
  //     return(
  //         <ul>
  //             <li onClick={()=>signIn()} className='whitespace-nowrap hover:bg-gray-100 hover:text-neutral-900 px-5 py-2 cursor-pointer'>SignIn</li>
  //         </ul>
  //     )
  // }
  return (
    <div
      className=" sticky top-0 z-50 w-full"
      style={{ background: '#ffffff' }}
    >
      <div className="top-0 flex w-full items-center justify-between border-b-[1px] py-4">
        <div className="flex items-center md:space-x-10 lg:space-x-20 ">
          <div className="text-2xl font-semibold">
            <a href="/">XCLUSIVE SHOP</a>
          </div>
          <div>
            <SearchBar />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <nav className='max-md:hidden'>
            {token ? (
              <ul className='flex items-center justify-center space-x-7 text-[15px] opacity-70 lg:space-x-10'>
                <li>
                  <Link href='/dashboard/Cotizaciones'>
                    <span className='inline-block w-full py-3'>Mis Cotizaciones</span>
                  </Link>
                </li>
                <li>
                  <p>{name}</p>
                </li>
                <li>
                  <Link href={token ? "/Cotizar" : "/Login"}
                  onClick={token ? handleCotizacion : () => {
                    alert('Por favor, inicie sesion para cotizar');
                  }}>
                    <button className="inline-block w-full py-3">Cotizar</button>
                  </Link>
                </li>
                <li onClick={handleLogout}>
                  <LongOut />
                </li>
              </ul>
            ) : (
              <ul className="flex flex-row items-center justify-center space-x-7 text-[15px] opacity-70 lg:space-x-10">
                <li>
                  <Link href="/Login" className="inline-block  py-3">
                    <p>Iniciar Sesion</p>
                  </Link>
                </li>
                <li>
                  <Link href="/registrarse" className="inline-block py-3">
                    <p>Crear cuenta</p>
                  </Link>
                </li>
                <li>
                  <Link href={token ? "/Cotizar" : "/Login"}
                  onClick={token ? handleCotizacion : () => {
                    alert('Por favor, inicie sesion para cotizar');
                  }}>
                    <button className="inline-block w-full py-3">Cotizar</button>
                  </Link>
                </li>
              </ul>
            )}
          </nav>
          {/* <nav className="max-md:hidden">
            {
              <ul className="flex items-end space-x-7 text-[15px] opacity-70 lg:space-x-10">
                <li>
                  <Link href="/Login" className="inline-block w-full py-3">
                    Iniciar sesion
                  </Link>
                </li>
                <li>
                  <a href="/registrarse" className="inline-block w-full py-3">
                    Crear cuenta
                  </a>
                </li>
                <li>
                  <button className="inline-block w-full py-3">Cotizar</button>
                </li>
              </ul>
            }
          </nav> */}
          {/* <span
            onClick={() => setShowNav(!showNav)}
            className="rounded-full bg-gray-100 p-[9px] md:hidden"
          >
            <BsChevronCompactUp
              className={`transition duration-150 ease-in ${
                showNav ? 'rotate-180' : '0'
              }`}
            />
          </span> */}
        </div>
      </div>
      {/* <div
        className={`md:hidden ${
          showNav ? 'px-5 pb-4' : 'invisible h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col px-2 text-[15px] opacity-75">
          <li>
            <a href="/iniciarSesion" className="inline-block w-full py-3">
              Iniciar sesion
            </a>
          </li>
          <li>
            <a href="/registrarse" className="inline-block w-full py-3">
              Crear cuenta
            </a>
          </li>
          <li>
            <a href="/cotizar" className="inline-block w-full py-3">
              Cotizar
            </a>
          </li>
        </ul>
        <div className="my-4 flex items-center rounded-lg bg-gray-100 p-2 py-3">
          <input
            type="text"
            className="ml-2 w-full bg-transparent text-[15px] caret-blue-500 outline-none placeholder:font-light placeholder:text-gray-600"
            placeholder="Search"
            autoComplete="false"
          />
          <button>
            <BiSearch size={20} className="opacity-50" />
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;
