import Head from 'next/head';
import { useState } from 'react';

const seccionesMural = [
  {
    slug: 'pescadores',
    titulo: 'Pescadores y el Río',
    subtitulo: 'Trabajo y vida sobre el Paraguay',
    descripcion: 'Representa la identidad ribereña, las canoas y el esfuerzo cotidiano de las familias que viven de la pesca y el río.',
    imagen: '/IMG-20260909-WA0004.jpg'
  },
  {
    slug: 'memoria-pobladores',
    titulo: 'Memoria Viva y Pobladores',
    subtitulo: 'Historia comunitaria y raíces',
    descripcion: 'Homenaje a los relatos recopilados en los talleres comunitarios, rescatando anécdotas y rostros de Puerto Antequera.',
    imagen: '/IMG-20260909-WA0004.jpg'
  }
];

export default function PuertoAntequera() {
  const [imagenModal, setImagenModal] = useState(null);

  return (
    <div style={{ backgroundColor: '#0c0a09', color: '#f5f5f4', minHeight: '100vh', padding: '16px', fontFamily: 'sans-serif' }}>
      <Head>
        <title>Muro de la Memoria Viva | Puerto Antequera</title>
      </Head>

      <div style={{ maxWidth: '640px', margin: '0 auto', paddingBottom: '48px' }}>
        
        {/* Cabecera */}
        <header style={{ textAlign: 'center', margin: '16px 0 20px' }}>
          <p style={{ color: '#f59e0b', fontSize: '12px', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', margin: 0 }}>
            Puerto Antequera
          </p>
          <h1 style={{ fontSize: '26px', fontWeight: '900', margin: '6px 0 10px' }}>
            Muro de la Memoria Viva
          </h1>
          <p style={{ fontSize: '13px', color: '#a8a29e', margin: 0 }}>
            Guía interactiva del mural y rescate de la memoria ribereña.
          </p>
        </header>

        {/* 1. Portada Panorámica Completa */}
        <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid #292524', marginBottom: '28px' }}>
          <img 
            src="/IMG-20260909-WA0004.jpg" 
            alt="Mural Completo Puerto Antequera" 
            style={{ width: '100%', display: 'block', maxHeight: '360px', objectFit: 'cover' }}
            onClick={() => setImagenModal('/IMG-20260909-WA0004.jpg')}
          />
          <div style={{ padding: '8px 12px', background: '#1c1917', fontSize: '11px', color: '#78716c', textAlign: 'center' }}>
            Vista panorámica completa del mural
          </div>
        </div>

        {/* 2. Secciones con IDs para los códigos QR */}
        <h2 style={{ fontSize: '16px', color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>
          🎨 Secciones del Mural
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {seccionesMural.map((sec) => (
            <section 
              key={sec.slug} 
              id={sec.slug}
              style={{
                background: '#1c1917',
                borderRadius: '16px',
                border: '1px solid #292524',
                overflow: 'hidden',
                scrollMarginTop: '20px'
              }}
            >
              <img 
                src={sec.imagen} 
                alt={sec.titulo}
                style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }}
                onClick={() => setImagenModal(sec.imagen)}
              />
              <div style={{ padding: '16px' }}>
                <span style={{ fontSize: '11px', color: '#f59e0b', fontWeight: 'bold', textTransform: 'uppercase' }}>
                  {sec.subtitulo}
                </span>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '4px 0 8px', color: '#f5f5f4' }}>
                  {sec.titulo}
                </h3>
                <p style={{ fontSize: '13px', color: '#d6d3d1', lineHeight: '1.5', margin: 0 }}>
                  {sec.descripcion}
                </p>
              </div>
            </section>
          ))}
        </div>

      </div>

      {/* Visor emergente al tocar cualquier foto */}
      {imagenModal && (
        <div 
          onClick={() => setImagenModal(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '16px'
          }}
        >
          <img src={imagenModal} alt="Detalle ampliado" style={{ maxWidth: '100%', maxHeight: '90vh', borderRadius: '8px' }} />
        </div>
      )}
    </div>
  );
}
