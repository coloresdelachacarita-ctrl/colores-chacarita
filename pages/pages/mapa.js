
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import L from "leaflet";

const MapContainer = dynamic(() => import("react-leaflet").then(m => m.MapContainer), { ssr: false });
const TileLayer    = dynamic(() => import("react-leaflet").then(m => m.TileLayer), { ssr: false });
const Marker       = dynamic(() => import("react-leaflet").then(m => m.Marker), { ssr: false });
const Popup        = dynamic(() => import("react-leaflet").then(m => m.Popup), { ssr: false });

export default function Mapa() {
  const [murales, setMurales] = useState([]);

  useEffect(() => {
    fetch("/murales.json")
      .then(r => r.json())
      .then(setMurales);
  }, []);

  const icon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41]
  });

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <MapContainer center={[-25.274, -57.635]} zoom={15} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {murales.map(m => (
          <Marker key={m.id} position={[m.lat, m.lng]} icon={icon}>
            <Popup>
              <strong>{m.nombre}</strong>
              <p>{m.descripcion}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
