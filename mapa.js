// pages/mapa.js
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('../components/Map'), { ssr: false });

export default function MapaPage() {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <h1>Mapa de Murales</h1>
      <Map />
    </div>
  );
}
