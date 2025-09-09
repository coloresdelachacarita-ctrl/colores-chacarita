
// components/MapaLeaflet.jsx
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// 👉 Arreglo del icono por defecto de Leaflet (necesario en Next/Vercel)
import L from "leaflet";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Cargamos react-leaflet de forma dinámica (sin SSR)
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);

const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);

const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);

const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

export default function MapaLeaflet() {
  const [murales, setMurales] = useState([]);

  useEffect(() => {
    fetch("/murales.json")
      .then((res) => res.json())
      .then((data) => setMurales(data))
      .catch((err) => console.error("Error cargando murales:", err));
  }, []);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <MapContainer
        center={[-25.2825, -57.635]}
        zoom={15}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {murales
          .filter((m) => typeof m.lat === "number" && typeof m.lng === "number")
          .map((m) => (
            <Marker key={m.id} position={[m.lat, m.lng]}>
              <Popup>
                <b>{m.nombre}</b>
                <br />
                {m.autor && <>Autor: {m.autor}<br /></>}
                {m.descripcion}
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
}
