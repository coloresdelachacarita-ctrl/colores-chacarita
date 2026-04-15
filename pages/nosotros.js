import Head from 'next/head';

export default function NosotrosPage() {
    const pilares = [
        { icon: '👥', title: 'Impacto Comunitario', text: 'Nuestra motivación es la importante función social del espacio público.', bgColor: '#6c5ce7' },
        { icon: '🎨', title: 'Conexión e Integración', text: 'Promovemos la integración con la comunidad por medio del arte público.', bgColor: '#badc58' },
        { icon: '🌱', title: 'Raíces y Tradiciones', text: 'Visibilizar las tradiciones que representan al primer barrio de Asunción.', bgColor: '#81ecec' },
        { icon: '🤝', title: 'Cultura Colectiva', text: 'Creemos en la construcción colectiva para aportar a la cultura.', bgColor: '#fab1a0' }
    ];

    return (
        <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
            <Head>
                <title>Sobre el Proyecto | Colores de la Chacarita</title>
            </Head>

            <main style={{ padding: '40px 20px' }}>
                <div style={{ maxWidth: '900px', margin: 'auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h1 style={{ color: '#8e44ad', fontSize: '2.5rem' }}>¿En qué consiste el proyecto?</h1>
                        <p style={{ color: '#555' }}>La esencia y pilares de Colores de la Chacarita.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
                        {pilares.map((pilar, index) => (
                            <div key={index} style={{ padding: '20px', borderRadius: '15px', backgroundColor: pilar.bgColor, color: '#fff', textAlign: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                                <div style={{ fontSize: '3rem' }}>{pilar.icon}</div>
                                <h3>{pilar.title}</h3>
                                <p>{pilar.text}</p>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: '50px', padding: '30px', border: '2px solid #ddd', borderRadius: '12px', textAlign: 'center', background: '#fff' }}>
                        <h2 style={{ color: '#e74c3c' }}>Nuestra Meta Final</h2>
                        <p>Queremos colaborar a construir una galería a cielo abierto en el corazón de Asunción.</p>
                    </div>
                    
                    <div style={{ textAlign: 'center', marginTop: '20px' }}>
                        <a href="/" style={{ color: '#8e44ad', fontWeight: 'bold' }}>← Volver al inicio</a>
                    </div>
                </div>
            </main>
        </div>
    );
}
