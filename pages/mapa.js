// pages/mapa.js
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Importamos el componente del mapa sin SSR
const MapaLeaflet = dynamic(() => import("../components/MapaLeaflet"), {
  ssr: false,
});

export default function MapaPage() {
  const [murales, setMurales] = useState([]);

  useEffect(() => {
    fetch("/murales.json")
      .then((res) => res.json())
      .then((data) => setMurales(data))
      .catch((e) => console.error("Error cargando murales.json", e));
  }, []);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <MapaLeaflet murales={murales} />
    </div>
  );
}
