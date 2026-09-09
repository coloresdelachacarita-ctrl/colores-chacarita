import Head from 'next/head';
import { useState } from 'react';

const puntosMural = [
  {
    id: 1,
    titulo: 'Pescadores y el Río',
    descripcion: 'Representa la identidad ribereña, las canoas y el trabajo cotidiano en las aguas del río Paraguay.',
    imagen: '/IMG-20260909-WA0004.jpg'
  },
  {
    id: 2,
    titulo: 'Memoria Viva y Pobladores',
    descripcion: 'Homenaje a los referentes históricos y los relatos recopilados en los talleres comunitarios.',
    imagen: '/IMG-20260909-WA0004.jpg'
  }
];

    export default function Antequera() {
  const [puntoActivo, setPuntoActivo] = useState(null);

  return (
  <div style={{ backgroundColor: '#0c0a09', color: '#f5f5f4', minHeight: '100vh', padding: '16px', fontFamily: 'sans-serif' }}>
      <Head>
        <title>Muro de la Memoria Viva - Puerto Antequera | ColoresPy</title>
      </Head>

      <div style={{ maxWidth: '600px', margin: '0 auto', paddingBottom: '40px' }}>
        {/* Cabecera */}
        <header style={{ textAlign: 'center', margin: '20px 0' }}>
<div style={{ width: '100%', margin: '16px 0', borderRadius: '16px', overflow: 'hidden', border: '1px solid #292524' }}>
  <img 
    src="/IMG-20260909-WA0004.jpg" 
    alt="Mural Puerto Antequera - Portada" 
    style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '380px', objectFit: 'cover' }} 
  />
</div>

          <p style={{ color: '#f59e0b', fontSize: '12px', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>
            Puerto Antequera
          </p>
          <h1 style={{ fontSize: '24px', fontWeight: '900', margin: '6px 0' }}>
            Muro de la Memoria Viva
          </h1>
          <p style={{ fontSize: '13px', color: '#a8a29e' }}>
            Iniciativa comunitaria de arte público y rescate de la memoria ribereña.
          </p>
        </header>

        {/* Sección Mural */}
        <section style={{ marginBottom: '24px', background: '#1c1917', borderRadius: '16px', padding: '16px', border: '1px solid #292524' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '12px', color: '#f59e0b' }}>
            🎨 Elementos del Mural
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {puntosMural.map((punto) => (
              <div 
                key={punto.id} 
                onClick={() => setPuntoActivo(punto)}
                style={{ background: '#292524', padding: '12px', borderRadius: '12px', cursor: 'pointer' }}
              >
                <h3 style={{ fontSize: '15px', fontWeight: 'bold' }}>{punto.titulo}</h3>
                <p style={{ fontSize: '12px', color: '#d6d3d1', marginTop: '4px' }}>{punto.descripcion}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Turismo y Gastronomía Local */}
        <section style={{ marginBottom: '24px', background: '#1c1917', borderRadius: '16px', padding: '16px', border: '1px solid #292524' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '12px' }}>
            📍 Viví Antequera
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a 
              href="https://wa.me/595981220303?text=Hola%20Juan%2C%20quiero%20información%20sobre%20comedores%20en%20Antequera" 
              target="_blank" 
              rel="noreferrer"
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#292524', padding: '12px', borderRadius: '12px', textDecoration: 'none', color: '#fff' }}
            >
              <div>
                <strong>🐟 Gastronomía Ribereña</strong>
                <div style={{ fontSize: '11px', color: '#a8a29e' }}>Pescado fresco, chupín y minutas</div>
              </div>
              <span style={{ fontSize: '12px', color: '#f59e0b' }}>Consultar →</span>
            </a>

            <a 
              href="https://wa.me/595981220303?text=Hola%20Juan%2C%20quiero%20contactar%20paseo%20en%20bote%20en%20Antequera" 
              target="_blank" 
              rel="noreferrer"
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#292524', padding: '12px', borderRadius: '12px', textDecoration: 'none', color: '#fff' }}
            >
              <div>
                <strong>🛶 Paseos en Bote y Pesca</strong>
                <div style={{ fontSize: '11px', color: '#a8a29e' }}>Recorridos guiados por el río</div>
              </div>
              <span style={{ fontSize: '12px', color: '#f59e0b' }}>Consultar →</span>
            </a>
          </div>
        </section>

        {/* Tienda ColoresPy */}
        <section style={{ textAlign: 'center', background: '#1c1917', padding: '20px', borderRadius: '16px', border: '1px solid #f59e0b40' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#f59e0b' }}>🛍️ Tienda ColoresPy</h3>
          <p style={{ fontSize: '12px', color: '#a8a29e', margin: '6px 0 14px' }}>
            Remeras, grabados y recuerdos que apoyan el arte comunitario.
          </p>
          <a
            href="https://wa.me/595981220303?text=Hola%20Juan%2C%20quiero%20adquirir%20merchandising%20de%20ColoresPy"
            target="_blank"
            rel="noreferrer"
            style={{ display: 'inline-block', background: '#f59e0b', color: '#0c0a09', padding: '10px 18px', borderRadius: '10px', fontWeight: 'bold', fontSize: '13px', textDecoration: 'none' }}
          >
            Pedir por WhatsApp
          </a>
        </section>
      </div>
    </div>
  );
}
