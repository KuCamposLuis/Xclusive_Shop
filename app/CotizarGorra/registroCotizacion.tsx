// RegistroCotizacion.tsx
'use client';
import Navbar from '../Components/nav/NavBar';
import ImageCotizacion from './Imagecotizacion';
import FormCotizacion from './FormCotizacion';
import BetaCot from './betaCot';

export default function RegistroCotizacion({
  params,
}: {
  params: { slug: string };
}) {
  // const urlString = product?.images;

  return (
    <div className="py-5: mx-auto max-w-[1280px] px-5">
      <Navbar />
      <hr />
      <div className="mt-10 grid grid-cols-1 gap-14 sm:grid-cols-2">
        <ImageCotizacion />
        {/* <FormCotizacion /> */}
        <BetaCot /> 
      </div>
    </div>
  );
}
