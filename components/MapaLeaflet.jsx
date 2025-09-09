// components/MapaLeaflet.jsx
import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";

// Cargas dinámicas (sin SSR) para Next.js
const MapContainer = dynamic(() => import("react-leaflet").then(m => m.MapContainer), { ssr: false });
const TileLayer     = dynamic(() => import("react-leaflet").then(m => m.TileLayer),     { ssr: false });
const Marker        = dynamic(() => import("react-leaflet").then(m => m.Marker),        { ssr: false });
const Popup         = dynamic(() => import("react-leaflet").then(m => m.Popup),         { ssr: false });
const useMapEvents  = dynamic(() => import("react-leaflet").then(m => m.useMapEvents),  { ssr: false });

function ClickCatcher({ onClick }) {
  useMapEvents({
    click(e) { onClick(e.latlng); }
  });
  return null;
}

export default function MapaLeaflet() {
  const [murales, setMurales] = useState([]);
  const [tempPoint, setTempPoint] = useState(null);

  // Centro aproximado Chacarita
  const center = useMemo(() => ({ lat: -25.2746, lng: -57.6353 }), []);

  useEffect(() => {
    fetch("/murales.json")
      .then(r => r.json())
      .then(setMurales)
      .catch(() => setMurales([]));
  }, []);

  // Query params
  const { marcar, targetId } = useMemo(() => {
    if (typeof window === "undefined") return { marcar: false, targetId: null };
    const sp = new URLSearchParams(window.location.search);
    return {
      marcar: sp.get("marcar") === "1",
      targetId: sp.get("id") ? Number(sp.get("id")) : null
    };
  }, []);

  const target = useMemo(
    () => (targetId ? murales.find(m => m.id === targetId) : null),
    [murales, targetId]
  );

  const handleClick = (latlng) => {
    setTempPoint(latlng);
    const snippetOnlyCoords = `"lat": ${latlng.lat.toFixed(6)}, "lng": ${latlng.lng.toFixed(6)}`;

    let snippet =
      target
        ? `{\n  "id": ${target.id},\n  "nombre": "${target.nombre}",\n  "autor": "${target.autor}",\n  "lat": ${latlng.lat.toFixed(6)},\n  "lng": ${latlng.lng.toFixed(6)}\n}`
        : snippetOnlyCoords;

    // copiar al portapapeles
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(snippet).catch(() => {});
    }

    alert(
      target
        ? `Coordenadas para el mural #${target.id}:\n\n${snippet}\n\nPégalo en public/murales.json (reemplazando lat/lng del id ${target.id}).`
        : `Coordenadas copiadas:\n${snippetOnlyCoords}\n\nAgrega estos valores en el mural correspondiente.`
    );
  };

  return (
    <MapContainer center={center} zoom={15} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Marcadores ya definidos */}
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

      {/* Modo marcar */}
      {marcar && (
        <>
          <ClickCatcher onClick={handleClick} />
          {tempPoint && (
            <Marker position={[tempPoint.lat, tempPoint.lng]}>
              <Popup>
                Temporal: {tempPoint.lat.toFixed(6)}, {tempPoint.lng.toFixed(6)}<br/>
                {target ? <b>Asignando a #{target.id}: {target.nombre}</b> : null}
              </Popup>
            </Marker>
          )}
        </>
      )}
    </MapContainer>
  );
}
