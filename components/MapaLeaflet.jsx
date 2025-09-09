// components/MapaLeaflet.jsx
import dynamic from "next/dynamic";
import { useEffect } from "react";

// Cargamos los componentes de react-leaflet solo en el cliente (sin SSR)
const MapContainer = dynamic(
  () => import("react-leaflet").then((m) => m.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((m) => m.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((m) => m.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((m) => m.Popup),
  { ssr: false }
);

export default function MapaLeaflet({ murales = [] }) {
  // Arregla el ícono del marcador de Leaflet en Next/Vercel
  useEffect(() => {
    (async () => {
      const L = (await import("leaflet")).default;
      // Evita que Leaflet busque los íconos por ruta relativa
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });
    })();
  }, []);

  return (
    <MapContainer
      center={[-25.2746, -57.6353]} // punto inicial (ajústalo si quieres)
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
            <b>{mural.nombre}</b>
            <br />
            {mural.descripcion}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
