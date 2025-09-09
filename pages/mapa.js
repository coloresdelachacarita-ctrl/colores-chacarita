
// pages/mapa.js
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

// Carga dinámica de react-leaflet (sin SSR)
const MapContainer = dynamic(
  () => import('react-leaflet').then(mod => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then(mod => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then(mod => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import('react-leaflet').then(mod => mod.Popup),
  { ssr: false }
);

// **Fija los íconos por defecto de Leaflet** (para que aparezcan en Vercel)
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Usa íconos desde CDN para evitar problemas de ruta en build
const iconBase =
  'https://unpkg.com/leaflet@1.9.4/dist/images/';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: `${iconBase}marker-icon-2x.png`,
  iconUrl: `${iconBase}marker-icon.png`,
  shadowUrl: `${iconBase}marker-shadow.png`,
});

export default function Mapa() {
  const [murales, setMurales] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // En Next, todo lo que haya en /public se sirve en la raíz -> "/murales.json"
    fetch('/murales.json')
      .then((res) => {
        if (!res.ok) throw new Error('No se pudo cargar murales.json');
        return res.json();
      })
      .then((data) => {
        // Asegura números
        const list = (Array.isArray(data) ? data : []).map((m) => ({
          ...m,
          lat: typeof m.lat === 'string' ? parseFloat(m.lat) : m.lat,
          lng: typeof m.lng === 'string' ? parseFloat(m.lng) : m.lng,
        }));
        setMurales(list);
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p style={{ padding: 16 }}>Cargando mapa…</p>;
  }
  if (error) {
    return (
      <div style={{ padding: 16, color: 'crimson' }}>
        <p><b>Error:</b> {error}</p>
        <p>Revisa que exista <code>/public/murales.json</code> y que el JSON sea válido.</p>
      </div>
    );
  }

  // Centro aproximado en Chacarita / Asunción (ajústalo si quieres)
  const center = [-25.2746, -57.6353];

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <MapContainer center={center} zoom={15} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> colaboradores'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {murales.map((m) => (
          typeof m.lat === 'number' && typeof m.lng === 'number' && !Number.isNaN(m.lat) && !Number.isNaN(m.lng) ? (
            <Marker key={m.id ?? `${m.lat}-${m.lng}`} position={[m.lat, m.lng]}>
              <Popup>
                <b>{m.nombre || 'Mural sin título'}</b><br />
                {m.descripcion || ''}
              </Popup>
            </Marker>
          ) : null
        ))}
      </MapContainer>
    </div>
  );
      }
