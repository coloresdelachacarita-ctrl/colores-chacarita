
// components/MapaLeaflet.jsx
import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";

// Cargas dinámicas (SSR off) para Next.js
const MapContainer = dynamic(() => import("react-leaflet").then(m => m.MapContainer), { ssr: false });
const TileLayer     = dynamic(() => import("react-leaflet").then(m => m.TileLayer),     { ssr: false });
const Marker        = dynamic(() => import("react-leaflet").then(m => m.Marker),        { ssr: false });
const Popup         = dynamic(() => import("react-leaflet").then(m => m.Popup),         { ssr: false });
const useMapEvents  = dynamic(() => import("react-leaflet").then(m => m.useMapEvents),  { ssr: false });

function ClickCatcher({ onClick }) {
  // Captura clicks en el mapa cuando estamos en modo marcar
  useMapEvents({
    click(e) {
      onClick(e.latlng);
    }
  });
  return null;
}

export default function MapaLeaflet() {
  const [murales, setMurales] = useState([]);
  const [tempPoint, setTempPoint] = useState(null);

  const center = useMemo(() => ({ lat: -25.2746, lng: -57.6353 }), []);

  useEffect(() => {
    fetch("/murales.json")
      .then(r => r.json())
      .then(setMurales)
      .catch(() => setMurales([]));
  }, []);

  // ¿Estamos en modo marcar? (si la URL contiene ?marcar=1)
  const marcar = useMemo(() => {
    if (typeof window === "undefined") return false;
    const sp = new URLSearchParams(window.location.search);
    return sp.get("marcar") === "1";
  }, []);

  const handleClick = (latlng) => {
    setTempPoint(latlng);

    // Construimos un snippet para copiar y pegar en murales.json
    const snippet = `"lat": ${latlng.lat.toFixed(6)}, "lng": ${latlng.lng.toFixed(6)}`;
    // intentamos copiar al portapapeles
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(snippet).catch(() => {});
    }
    alert(`Coordenadas copiadas:\n${snippet}\n\nPégalo en el mural correspondiente dentro de public/murales.json`);
  };

  return (
    <MapContainer center={center} zoom={15} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Marcadores ya definidos (solo si tienen lat/lng) */}
      {murales
        .filter(m => typeof m.lat === "number" && typeof m.lng === "number")
        .map(m => (
          <Marker key={m.id} position={[m.lat, m.lng]}>
            <Popup>
              <b>{m.id}. {m.nombre}</b><br />
              <small>{m.autor}</small>
            </Popup>
          </Marker>
        ))}

      {/* Modo marcar: capturar click y dejar un pin temporal */}
      {marcar && (
        <>
          <ClickCatcher onClick={handleClick} />
          {tempPoint && (
            <Marker position={[tempPoint.lat, tempPoint.lng]}>
              <Popup>Temporal: {tempPoint.lat.toFixed(6)}, {tempPoint.lng.toFixed(6)}</Popup>
            </Marker>
          )}
        </>
      )}
    </MapContainer>
  );
}
