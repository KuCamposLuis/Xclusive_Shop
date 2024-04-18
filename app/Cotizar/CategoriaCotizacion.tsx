'use client'
import React, { use, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import postCotizacion from '../Components/connection/postCotizacion';

type Props = {};

const CategoriaCotizacion = () => {


  // useEffect(() => {
  //   if (!idCliente) {
  //     alert('Por favor, inicie sesion para cotizar');
  //     router.push('/Login');
  //   }
  // }, []);
  return (
    <div className="font-Poppins bg-stone-600  text-white">
      <div className="py-10 text-center">
        <h5 className="text-fuchsia-50">Elige Tu Producto</h5>
        <h1 className="mx-auto mb-12 w-96 text-4xl font-bold leading-normal">
          Deja volar a tu imaginacion
        </h1>

        {/* Termo */}
        <div className="mx-auto flex max-w-5xl gap-8 group">
          <div className="flex flex-col items-center rounded-xl bg-white/10 p-8 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer">
            <Image
              src="/TermoPerso.jpg"
              alt=""
              width={150}
              height={100}
              className="rounded-full"
            />
            <h4 className="text-xl font-bold uppercase">Termo</h4>
            <Link href="/CotizarTermo">
              <button className="rounded-full bg-slate-500 px-8 py-2.5">
                Personalizar
              </button>
              </Link>
          </div>

          {/* Playera */}
          <div className="mx-auto flex max-w-5xl gap-8 group:">
          <div className="flex flex-col items-center rounded-xl bg-white/10 p-8 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer">
              <Image
                src="/PlayeraPerso.jpg"
                alt="s"
                width={150}
                height={100}
                className="rounded-full"
              />
              <h4 className="text-xl font-bold uppercase">Playera</h4>
              <Link href="/CotizarPlayera"> */
              <button className="rounded-full bg-slate-500 px-8 py-2.5">
                Personalizar
              </button>
              </Link>
            </div>
          </div>

          {/* Gorra */}
          <div className="mx-auto flex max-w-5xl gap-8 group:">
          <div className="flex flex-col items-center rounded-xl bg-white/10 p-8 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer">
              <Image
                src="/Gorraaa.jpeg  "
                alt=""
                width={139}
                height={100}
                className="rounded-full"
              />
              <h4 className="text-xl font-bold uppercase">Gorra</h4>
              <Link href="/CotizarGorra">
              <button className="rounded-full bg-slate-500 px-8 py-2.5">
                Personalizar
              </button>
              </Link>
            </div>
          </div>

          {/* Taza */}
          <div className="mx-auto flex max-w-5xl gap-8 group:">
          <div className="flex flex-col items-center rounded-xl bg-white/10 p-8 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer">
              <Image
                src="/TazaPerso.jpg"
                alt="GorraTravis"
                width={150}
                height={100}
                className="rounded-full"
              />
              <h4 className="text-xl font-bold uppercase">Taza</h4>
              <Link href="/CotizarTaza">
              <button className="rounded-full bg-slate-500 px-8 py-2.5">
                Personalizar
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriaCotizacion;
