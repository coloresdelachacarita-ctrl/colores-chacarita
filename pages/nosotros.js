// pages/nosotros.js
import Head from 'next/head';
import React from 'react';
import NosotrosCard from '../components/NosotrosCard'; // Importamos el componente que creaste

const NosotrosPage = () => {
    // Datos de las tarjetas (pilares del proyecto)
    const pilares = [
        {
            icon: '👥', 
            title: 'Impacto Comunitario',
            text: 'Nuestra motivación es la importante función social del espacio público y su impacto sobre la comunidad.', 
            bgColor: '#6c5ce7' // Púrpura
        },
        {
            icon: '🎨', 
            title: 'Conexión e Integración',
            text: 'Incentivando a conectarnos, conocernos, promoviendo la integración con la comunidad por medio del arte público.', 
            bgColor: '#badc58' // Verde lima
        },
        {
            icon: '🌱', 
            title: 'Raíces y Tradiciones',
            text: 'Visibilizar las tradiciones y costumbres que representan al primer barrio de Asunción.', 
            bgColor: '#81ecec' // Turquesa
        },
        {
            icon: '🤝', 
            title: 'Cultura Colectiva',
            text: 'Creemos en la construcción colectiva para aportar a la cultura entre todos y todas.', 
            bgColor: '#fab1a0' // Rosa claro
        }
    ];

    return (
        <div>
            <Head>
                <title>Sobre el Proyecto | Colores de la Chacarita</title>
            </Head>

            <main style={{ padding: '40px 20px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
                <div style={{ maxWidth: '900px', margin: 'auto' }}>

                    {/* Encabezado Principal */}
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h1 style={{ color: '#8e44ad', fontSize: '2.5rem', marginBottom: '10px' }}>
                            ¿En qué consiste el proyecto?
                        </h1>
                        <p style={{ color: '#555', fontSize: '1.1rem' }}>
                            Te contamos la esencia y los pilares de Colores de la Chacarita.
                        </p>
                    </div>

                    {/* Imagen Principal (El corazón con el barrio y la bandera) */}
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        {/* Asegúrate de tener esta imagen en public/img/corazon.png */}
                        <img 
                            src="/img/corazon.png" 
                            alt="Corazón de la Chacarita" 
                            style={{ 
                                maxWidth: '300px', 
                                display: 'block', 
                                margin: 'auto', 
                                boxShadow: '0 8px 12px rgba(0, 0, 0, 0.15)',
                                borderRadius: '15px'
                            }} 
                        />
                    </div>

                    {/* Grid de Pilares (Cards) */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '25px',
                        marginBottom: '60px'
                    }}>
                        {pilares.map((pilar, index) => (
                            <NosotrosCard key={index} {...pilar} />
                        ))}
                    </div>

                    {/* Sección de Cierre (Resumen Final) */}
                    <div style={{
                        marginTop: '40px',
                        padding: '30px',
                        border: '2px solid #ccc',
                        borderRadius: '12px',
                        backgroundColor: '#fff',
                        textAlign: 'center',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
                    }}>
                        <h2 style={{ color: '#e74c3c', fontSize: '2rem', marginBottom: '15px' }}>
                            Resumiendo: Nuestra Meta Final
                        </h2>
                        <p style={{
                            fontSize: '1.2rem',
                            lineHeight: '1.6',
                            color: '#333',
                            maxWidth: '700px',
                            margin: 'auto'
                        }}>
                            Queremos colaborar a construir una **galería a cielo abierto en el corazón de Asunción**, 
                            revalorizando y rescatando historias y tradiciones, integrando a la comunidad a ser protagonistas de un mejor futuro.
                        </p>
                    </div>

                </div>
            </main>
        </div>
    );
};

export default NosotrosPage;
