// pages/_app.js
import 'leaflet/dist/leaflet.css'; // Importa los estilos de Leaflet

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
