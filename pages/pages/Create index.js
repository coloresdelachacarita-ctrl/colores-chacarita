// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: 16 }}>
      <h1>Colores de la Chacarita</h1>
      <p>Explorá el circuito de murales del barrio.</p>
      <p>
        <Link href="/mapa">Ir al mapa</Link>
      </p>
    </main>
  );
}
