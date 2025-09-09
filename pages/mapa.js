
// pages/mapa.js
import dynamic from "next/dynamic";

const MapaLeaflet = dynamic(() => import("../components/MapaLeaflet"), { ssr: false });

export default function MapaPage() {
  return <MapaLeaflet />;
    }
