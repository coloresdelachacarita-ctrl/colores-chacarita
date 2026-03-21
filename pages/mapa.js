import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function MapaChacarita() {
  // Datos de los murales (Esto luego puede leerse desde tu murales.json)
  const [murales, setMurales] = useState([
    { id: 1, nombre: "Mural Fabio Garcete", lat: -25.28210, lng: -57.63650, anfitrion: "Gonzalo Galeano" },
    { id: 4, nombre: "Mural Juan Cáceres", lat: -25.28290, lng: -57.63280, anfitrion: "Jose Luis Molas" }
  ]);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Barra de Navegación Rápida */}
      <nav style={{ padding: '1rem', background: '#333', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/">
          <button style={{ background: 'none', border: '1px solid #fff', color: '#fff', cursor: 'pointer', padding: '5px 10px', borderRadius: '5px' }}>
            ⬅ Volver al Inicio
          </button>
        </Link>
        <h2 style={{ margin: 0, fontSize: '1.2rem' }}>Mapa de Colores</h2>
      </nav>

      {/* Contenedor del Mapa (Integración con Google Maps mediante Iframe para rapidez) */}
      <div style={{ flex: 1, position: 'relative' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.123456789!2d-57.635!3d-25.282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da77f96a66741%3A0xe17f0518a8966d72!2sMural(Coloresdelachacarita)!5e0!3m2!1ses!2spy!4v1711000000000!5m2!1ses!2spy"
          width="100%"
          height="100%"
          style={{ border: 0, minHeight: '500px' }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Lista de Puntos de Interés / Rutas */}
      <section style={{ padding: '1.5rem', background: '#fff' }}>
        <h3>📍 Puntos en el Recorrido</h3>
        <div style={{ display: 'flex', overflowX: 'auto', gap: '1rem', paddingBottom: '1rem' }}>
          {murales.map(mural => (
            <div key={mural.id} style={{ minWidth: '200px', padding: '10px', border: '1px solid #ddd', borderRadius: '10px', background: '#f9f9f9' }}>
              <h4 style={{ margin: '0 0 5px 0', fontSize: '0.9rem' }}>{mural.nombre}</h4>
              <p style={{ margin: 0, fontSize: '0.8rem', color: '#666' }}>🎙 Anfitrión: {mural.anfitrion}</p>
            </div>
          ))}
          {/* Espacio para Comercio Suscrito */}
          <div style={{ minWidth: '200px', padding: '10px', border: '2px solid #ff6600', borderRadius: '10px', background: '#fff9f0' }}>
            <h4 style={{ margin: '0 0 5px 0', fontSize: '0.9rem', color: '#ff6600' }}>🥘 Comida Cercana</h4>
            <p style={{ margin: 0, fontSize: '0.8rem' }}><b>Local Socio:</b> "
