import Link from 'next/link';

export default function Mapa() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>📍 Mapa de Murales</h1>
      <p>Próximamente: Integración con Google Maps</p>
      <Link href="/"><button style={{ padding: '10px' }}>Volver</button></Link>
    </div>
  );
}
