import Link from 'next/link';

export default function Home() {
  const whatsappMurales = "https://wa.me/595981234567";
  
  // Mensaje predeterminado para WhatsApp
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
      
      {/* HEADER CON LOGO */}
      <header style={{ textAlign: 'center', padding: '2rem', background: '#fff' }}>
        <img src="/img/logo.png" alt="Logo" style={{ maxWidth: '180px' }} onError={(e) => e.target.style.display='none'}/>
        <h1 style={{ color: '#d35400', margin: '10px 0' }}>Colores de la Chacarita</h1>
        <Link href="/nosotros">
          <button style={{ padding: '10px 20px', backgroundColor: '#8e44ad', color: '#fff', border: 'none', borderRadius: '20px', fontWeight: 'bold', cursor: 'pointer' }}>
            ¿En qué consiste el Proyecto?
          </button>
        </Link>
      </header>

      <main style={{ padding: '1rem', maxWidth: '800px', margin: '0 auto' }}>

        {/* MAPA INTERACTIVO */}
        <section style={{ margin: '2rem 0', textAlign: 'center' }}>
          <h2 style={{ color: '#2c3e50' }}>📍 Mapa de Murales</h2>
          <div style={{ borderRadius: '20px', overflow: 'hidden', height: '300px', border: '2px solid #ddd' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.941655655357!2d-57.632!3d-25.28!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE2JzQ4LjAiUyA1N8KwMzcnNTUuMiJX!5e0!3m2!1ses!2spy!4v1650000000000" 
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy">
            </iframe>
          </div>
        </section>

        {/* ANFITRIONES */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '2rem 0' }}>
          {anfitriones.map((a, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', textAlign: 'center' }}>
              <div style={{ height: '250px', backgroundColor: '#eee', backgroundImage: `url(${a.foto})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ margin: 0, color: '#e67e22' }}>{a.nombre}</h3>
                <p style={{ color: '#7f8c8d' }}>{a.rol}</p>
                <a href={a.wa} target="_blank" rel="noreferrer">
                  <button style={{ width: '100%', padding: '12px', background: '#25D366', color: '#fff', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}>
                    Reservar Circuito
                  </button>
                </a>
              </div>
            </div>
          ))}
        </section>

        {/* CARRUSEL DE INTERÉS (Simulado con scroll horizontal) */}
        <section style={{ margin: '2rem 0' }}>
          <h2 style={{ textAlign: 'center' }}>🏙️ Lugares de Interés</h2>
          <div style={{ display: 'flex', overflowX: 'auto', gap: '15px', padding: '10px 0' }}>
            {interes.map((item, i) => (
              <div key={i} style={{ minWidth: '200px', background: '#8e44ad', color: '#fff', padding: '20px', borderRadius: '15px', textAlign: 'center' }}>
                <h4 style={{ margin: 0 }}>{item.nombre}</h4>
                <small>{item.tipo}</small>
              </div>
            ))}
          </div>
        </section>

        {/* BOTÓN AUSPICIANTE */}
        <section style={{ background: '#fff', padding: '2rem', borderRadius: '20px', textAlign: 'center', border: '2px dashed #8e44ad', margin: '2rem 0' }}>
          <h3>¿Tenés un negocio en el barrio?</h3>
          <p>Querés sumarte como auspiciante del proyecto</p>
          <a href={whatsappMurales} style={{ textDecoration: 'none' }}>
            <button style={{ background: '#8e44ad', color: '#fff', padding: '15px 30px', borderRadius: '30px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>
              PRESIONAR AQUÍ
            </button>
          </a>
        </section>

        {/* REDES SOCIALES */}
        <section style={{ textAlign: 'center', margin: '2rem 0' }}>
          <p>Seguinos en redes:</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <a href="#" style={{ fontSize: '1.5rem', textDecoration: 'none' }}>🔵 FB</a>
            <a href="#" style={{ fontSize: '1.5rem', textDecoration: 'none' }}>📸 IG</a>
            <a href="#" style={{ fontSize: '1.5rem', textDecoration: 'none' }}>🐦 TW</a>
          </div>
        </section>

      </main>

      <footer style={{ textAlign: 'center', padding: '2rem', background: '#1a1a1a', color: '#fff' }}>
        <p>© 2026 Colores de la Chacarita</p>
      </footer>
    </div>
  );
}
