import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Cargamos el mapa de manera dinámica para que funcione en Next.js
const MapContainer = dynamic(
  () => import("react-leaflet").then(mod => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then(mod => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then(mod => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then(mod => mod.Popup),
  { ssr: false }
);

export default function Mapa() {
  const [murales, setMurales] = useState([]);

  useEffect(() => {
    fetch("/murales.json")
      .then(res => res.json())
      .then(data => setMurales(data));
  }, []);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <MapContainer
        center={[-25.2746, -57.6353]}
        zoom={15}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {murales.map((mural) => (
          <Marker key={mural.id} position={[mural.lat, mural.lng]}>
            <Popup>
              <b>{mural.nombre}</b> <br />
              {mural.descripcion}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
    } Update mapa.js
