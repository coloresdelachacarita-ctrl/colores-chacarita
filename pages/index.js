
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: 20 }}>
      <h1>Circuito de Murales – Colores de la Chacarita</h1>
      <p>Bienvenido a la primera versión de nuestra app en Next.js</p>
      <p>
        <Link href="/mapa">Ir al mapa</Link>
      </p>
    </main>
  );
}
