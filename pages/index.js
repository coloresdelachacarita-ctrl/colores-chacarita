import Link from 'next/link';

export default function Home() {
  const whatsappMurales = "https://wa.me/595981234567"; // Pon tu número real aquí
  
  // Mensaje predeterminado para WhatsApp de los circuitos turísticos
  const mensajeWA = encodeURIComponent("Hola, quiero realizar el circuito turístico. Horario: , Día: , Fecha: , Cantidad de participantes: ");

  const anfitriones = [
    {
      nombre: "Gonzalo Galeano",
      rol: "Anfitrión Turístico",
      foto: "/img/gonzalo.jpg",
      wa: `https://wa.me/595981000000?text=${mensajeWA}` // Cambia por su número real
    },
    {
      nombre: "José Luis Molas",
      rol: "Anfitrión Turístico",
      foto: "/img/jose.jpg",
      wa: `https://wa.me/595981000001?text=${mensajeWA}` // Cambia por su número real
    }
  ];

  const interes = [
    { nombre: "Casa Museo José A. Flores", tipo: "Cultura" },
    { nombre: "Hospedajes locales", tipo: "Alojamiento" },
    { nombre: "Comedores y Bares", tipo: "Gastronomía" },
    { nombre: "Clubes de Fútbol", tipo: "Deporte" }
  ];

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f4f4f4', minHeight: '100vh', margin: 0 }}>
      
      {/* HEADER CON LOGO Y BOTÓN 'SOBRE NOSOTROS' */}
      <header style={{ textAlign: 'center', padding: '2.5rem', background: '#fff' }}>
        <img 
          src="/img/logo.png" 
          alt="Logo Colores de la Chacarita" 
          style={{ maxWidth: '200px', display: 'block', margin: '0 auto 1.5rem auto' }} 
          onError={(e) => e.target.style.display='none'}
        />
        <h1 style={{ color: '#d35400', margin: '10px 0', fontSize: '1.8rem' }}>Colores de la Chacarita</h1>
        <Link href="/nosotros">
          <button style={{ padding: '10px 20px', backgroundColor: '#8e44ad', color: '#fff', border: 'none', borderRadius: '20px', fontWeight: 'bold', cursor: 'pointer', fontSize: '0.9rem' }}>
            ¿En qué consiste el Proyecto?
          </button>
        </Link>
      </header>

      <main style={{ padding: '1rem', maxWidth: '800px', margin: '0 auto' }}>

        {/* MAPA INTERACTIVO */}
        <section style={{ margin: '2rem 0', textAlign: 'center' }}>
          <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginBottom: '1.2rem' }}>📍 Mapa de Murales</h2>
          <div style={{ borderRadius: '20px', overflow: 'hidden', height: '300px', border: '2px solid #ddd' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.848386450682!2d-57.6322976!3d-25.281895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9408e063f912e753%3A0x6b4ac0b79339e728!2sLa%20Chacarita%2C%20Asunci%C3%B3n%2C%20Paraguay!5e0!3m2!1ses-419!2sus!4v1713212891910!5m2!1ses-419!2sus" 
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy">
            </iframe>
          </div>
        </section>

        {/* ANFITRIONES DE CIRCUITO TURÍSTICO */}
        <section style={{ margin: '3rem 0' }}>
            <h2 style={{ textAlign: 'center', color: '#d35400', marginBottom: '1.8rem', fontSize: '1.5rem' }}>👥 Anfitriones de Circuito Turístico</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
              {anfitriones.map((a, i) => (
                <div key={i} style={{ background: '#fff', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', textAlign: 'center', border: '1px solid #ffcc66' }}>
                  <div style={{ 
                      height: '350px', 
                      backgroundColor: '#eee', 
                      backgroundImage: `url(${a.foto})`, 
                      backgroundSize: 'cover', 
                      backgroundPosition: 'center' 
                  }}></div>
                  <div style={{ padding: '1.8rem' }}>
                    <h3 style={{ margin: '0 0 10px 0', color: '#e67e22', fontSize: '1.4rem' }}>{a.nombre}</h3>
                    <p style={{ color: '#7f8c8d', fontWeight: 'bold', marginBottom: '1.5rem' }}>{a.rol}</p>
                    <a href={a.wa} target="_blank" rel="noreferrer">
                      <button style={{ width: '100%', padding: '14px', background: '#25D366', color: '#fff', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem' }}>
                        Reservar Circuito
                      </button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
        </section>

        {/* CARRUSEL DE INTERÉS (Simulado con scroll horizontal) */}
        <section style={{ margin: '3rem 0' }}>
          <h2 style={{ textAlign: 'center', color: '#2c3e50', fontSize: '1.5rem', marginBottom: '1.5rem' }}>🏙️ Lugares de Interés</h2>
          <div style={{ display: 'flex', overflowX: 'auto', gap: '15px', padding: '10px 0' }}>
            {interes.map((item, i) => (
              <div key={i} style={{ minWidth: '220px', background: '#8e44ad', color: '#fff', padding: '25px', borderRadius: '15px', textAlign: 'center' }}>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '1.1rem' }}>{item.nombre}</h4>
                <small style={{ opacity: '0.8' }}>{item.tipo}</small>
              </div>
            ))}
          </div>
        </section>

        {/* BOTÓN AUSPICIANTE */}
        <section style={{ background: '#fff', padding: '2.5rem', borderRadius: '20px', textAlign: 'center', border: '3px dashed #8e44ad', margin: '3rem 0' }}>
          <h3 style={{ fontSize: '1.3rem', color: '#8e44ad', margin: '0 0 10px 0' }}>¿Tenés un negocio en el barrio?</h3>
          <p style={{ color: '#555', marginBottom: '1.5rem' }}>Querés sumarte como auspiciante del proyecto</p>
          <a href={whatsappMurales} style={{ textDecoration: 'none' }}>
            <button style={{ background: '#8e44ad', color: '#fff', padding: '15px 35px', borderRadius: '30px', border: 'none', fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem' }}>
              PRESIONAR AQUÍ
            </button>
          </a>
        </section>

        {/* REDES SOCIALES */}
        <section style={{ textAlign: 'center', margin: '3rem 0', borderTop: '1px solid #eee', paddingTop: '2rem' }}>
          <p style={{ color: '#7f8c8d', marginBottom: '1rem' }}>Seguinos en redes:</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '25px' }}>
            <a href="#" style={{ fontSize: '1.5rem', textDecoration: 'none', color: '#1877F2' }}>🔵 FB</a>
            <a href="#" style={{ fontSize: '1.5rem', textDecoration: 'none', color: '#E1306C' }}>📸 IG</a>
            <a href="#" style={{ fontSize: '1.5rem', textDecoration: 'none', color: '#1DA1F2' }}>🐦 TW</a>
          </div>
        </section>

      </main>

      <footer style={{ textAlign: 'center', padding: '3rem 1rem', background: '#1a1a1a', color: '#fff' }}>
        <p style={{ margin: 0, fontSize: '0.9rem', opacity: '0.7' }}>© 2026 Colores de la Chacarita</p>
      </footer>
    </div>
  );
}
