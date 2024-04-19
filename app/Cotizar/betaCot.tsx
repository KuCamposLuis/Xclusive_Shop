// import axios, { AxiosProgressEvent } from 'axios';
// import React, { useEffect, useState } from 'react';
// import ColoresComponent from '../Components/colores';
// import { FaRegCommentDots } from 'react-icons/fa';
// import getColoresByIds from '../api/getColores';
// import ReactStars from 'react-rating-star-with-type';
// import getTallasByIds from '../api/getTallas';


// const BetaCot = () => {

//   const [file, setFile] = useState<File | null>(null);
//   const [progress, setProgress] = useState({ started: false, pc: 0 });
//   const [msg, setMsg] = useState('');
//   const [idProducto, setIdProducto] = useState(''); // Estado para almacenar IdProducto

//   //TALLA.............
//   const [talla, setTalla] = useState<{nombreTalla: string }[] | null>(null); // Estado para almacenar Talla
//   const [tallaSeleccionada, setallaSeleccionada] = useState<string | null>(null); // Estado para almacenar la talla seleccionado

//   //COMENTARIOS..........
//   const [notas, setnotas] = useState(''); // Estado para almacenar IdProducto

//   //CANTIDAD.............
//   const [cantidad, setcantidad] = useState(''); // Estado para almacenar IdProducto

//   //COLORES..............
//   const [colores, setColores] = useState<{nombreColor: string }[] | null>(null);
//   const [colorSeleccionado, setColorSeleccionado] = useState<string | null>(null); // Estado para almacenar el color seleccionado

//   const handleupload = async () => {
//     if (!file) {
//       setMsg('no file');
//       return;
//     }

//     if (!colorSeleccionado) {
//       setMsg('select color');
//       return;
//     }

//     if (!tallaSeleccionada) {
//       setMsg('select talla');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('Imagenes', file);
//     formData.append('IdProducto', idProducto);
//     formData.append('Talla', tallaSeleccionada);
//     formData.append('Color', colorSeleccionado);
//     formData.append('notas', notas);
//     formData.append('cantida', cantidad);


//     setMsg('uploading');
//     setProgress((prevState) => {
//       return { ...prevState, started: true };
//     });
//     axios
//       .post(
//         'http://www.xclusivedesigns.somee.com/api/Cotizacion/1/productos',
//         formData,
//         {
//           onUploadProgress: (progressEvent: AxiosProgressEvent) => {
//             if (progressEvent.total) {
//               const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
//               setProgress((prevState) => {
//                 return {
//                   ...prevState,
//                   pc: percentCompleted,
//                 };
//               });
//             } else {
//               console.log('No se puede calcular el progreso porque total no está definido.');
//             }
//           },
//           headers: {
//             'custom-Header': 'value',
//           },
//         },
//       )
//       .then((res) => {
//         setMsg('uploaded');
//         console.log(res.data);
//       })
//       .catch((err) => {
//         if (err.response) {
//           console.log('Error de respuesta del servidor:', err.response.data);
//           console.log('Código de estado HTTP:', err.response.status);
//           console.log('Cabeceras de respuesta:', err.response.headers);
//         } else if (err.request) {
//           console.error('No se recibió respuesta del servidor:', err.request);
//         } else {
//           console.error('Error al configurar la solicitud:', err.message);
//         }
//       });
//   };

//   //TALLAS....................
//   useEffect(() => {
//     const fetchTallas = async () => {
//       const data = await getTallasByIds([2,3,4,5]);
//       setTalla(data.flat());
//     };

//     fetchTallas();
//   }, []);

//   const handleTallasClick = (nombreTalla: string) => {
//     console.log('Talla Seleccionada:', nombreTalla);
//     setallaSeleccionada(nombreTalla);
//   }

//   //COLORES....................
//   useEffect(() => {
//     const fetchColores = async () => {
//       const data = await getColoresByIds([1,2,3,4,5]);
//       setColores(data.flat());
//     };

//     fetchColores();
//   }, []);

//   const handleColorClick = (nombreColor: string) => {
//     console.log('color seleccionado:', nombreColor);
//     setColorSeleccionado(nombreColor);
//   }


 
//   return (
//     <div className="info relative">
//       <h1 className="text-2xl font-semibold">Playera Personalizada</h1>
//       <h3 className="text-2xl text-neutral-500">$100</h3>
//       <div className="mt-4 flex items-center space-x-12">
//         <ReactStars value={5} size={20} />
//         <span className="flex items-start space-x-3">
//           <FaRegCommentDots size={22} />
//           <span className="text-sm opacity-70">121 comments</span>
//         </span>
//       </div>

//       <input
//         placeholder="IdProducto"
//         value={idProducto}
//         onChange={(e) => setIdProducto(e.target.value)}
//       />
      
//       <h3 className="mb-3 mt-8 font-medium text-[14]">Tallas Disponibles:</h3>
      
//       <ul className="flex space-x-5">
//       {talla ? (
//           talla.map((talla, index) => (
//             <div
//               key={index}
//               className={`inline-block cursor-pointer rounded-lg border-[1px] p-1 px-2 text-center 
//               ${
//                 talla.nombreTalla === tallaSeleccionada ? 'bg-black text-white' : 'bg-white text-black'
//               }
//               `}
//               style={{
//                 display: 'inline-block',
//                 transition: 'transform 0.2s ease-in-out',
//               }}
//               onClick={() => handleTallasClick(talla.nombreTalla)}
//             >
//               {talla.nombreTalla}
//             </div>
//           ))
//         ) : (
//           <p>Cargando tallas...</p>
//         )}
//       </ul>
      

//       <h3 className="mb-3 mt-8 font-medium text-[14]">Colores disponibles:</h3>
//       {colores ? (
//           colores.map(
//             (color: {nombreColor: string }, index: number) => (
//               <div
//                 key={index}
//                 className={`relative m-1 h-[35px] w-[35px] border-[1px] border-neutral-400 cursor-pointer 
//                 ${
//                   color.nombreColor === colorSeleccionado ? 'ring-2 ring-blue-500' : ''
//                 }`}
//                 style={{
//                   backgroundColor: color.nombreColor,
//                   borderRadius: '100%',
//                   display: 'inline-block',
//                   transition: 'transform 0.2s ease-in-out',
//                 }
//               }
//                 onClick={() => handleColorClick(color.nombreColor)}
//               ></div>
//             ),
//           )
//         ) : (
//           <p>Cargando colores...</p>
//         )}

//       <h3 className="mb-3 mt-8 font-medium text-[14]">Carga tu Imagen:</h3>

//       <input
//         onChange={(e) => {
//           if (e.target.files) {
//             setFile(e.target.files[0]);
//           }
//         }}
//         type="file"
//       />

//       <h3 className="mb-3 mt-8 font-medium text-[14]">Cantidad:</h3>
//         <input
//           type="number"
//           placeholder="cantidad"
//           value={cantidad}
//           onChange={(e) => setcantidad(e.target.value)}
//           className="border border-gray-300 rounded-md px-3 py-2 w-20"
//         />


      
//       <h3 className="mb-3 mt-8 font-medium text-[14]">Notas</h3>
//       <input
//               placeholder="Introducir Notas"
//               value={notas}
//               onChange={(e) => setnotas(e.target.value)}
//             />

        

//       <div className="mt-7 flex items-center space-x-10">
//         {/* <AddCart productId={idProducto} />
//         <Cotizar params={{
//           slug: ''
//         }} /> */}

//         <button onClick={handleupload} className="mt-4 bg-blue-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
//                 Cargar
//               </button>
//               <button onClick={handleupload} className="mt-4 bg-blue-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
//                 Cargar
//               </button>


//               {progress.started && (
//                 <div className="mt-4">
//                   <progress max="100" value={progress.pc} className="w-full"></progress>
//                   <span className="block mt-2 text-sm">Progreso: {progress.pc}%</span>
//                 </div>
//               )}  


//               {msg && <span>{msg}</span>}
//       </div>
//     </div>
//   );
// };

// export default BetaCot;
