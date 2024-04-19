'use client';
import { useRouter } from 'next/navigation';

export default function LongOut() {
  const router = useRouter();

  const handleLongOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('lastName');
    localStorage.clear();
    router.push('/');
    console.log('Sesión cerrada');
  };

  return <button onClick={handleLongOut}>Cerrar Sesión</button>;
}
