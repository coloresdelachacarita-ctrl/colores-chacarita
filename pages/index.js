import Link from 'next/link';

export default function Home() {
  const whatsappJuan = "https://wa.me/595981220303";
  const mensajeCircuito = encodeURIComponent("Hola, quiero realizar el circuito turístico.\nHorario: \nDía: \nFecha: \nCantidad de participantes: ");

  const anfitriones = [
    {
      nombre: "Gonzalo Galeano",
      rol: "Anfitrión Turístico",
      // Nombre exacto según tu captura de la carpeta public
      foto: "/GONZALO,GALEANO.jpg", 
      wa: `https://wa.me/595961793791?text=${mensajeCircuito}`
    },
    {
      nombre: "José Luis Molas",
      rol: "Anfitrión Turístico",
      // Nombre exacto según tu captura de la carpeta public
      foto: "/Jose,Luis,Molas.png",
      wa: `https://wa.me/595986227141?text=${mensajeCircuito}`
    }
  ];

  const interes = [
    { 
      nombre: "Hostal Letra Libre", 
      tipo: "El mejor Hostel de Asunción", 
      link: "https://www.airbnb.com/h/letrafree1",
      icon: "🏠"
    },
    { nombre: "Casa Museo José A. Flores", tipo: "Cultura", link: "#", icon: "🎻" },
    { nombre: "Comedores y Bares", tipo: "Gastronomía", link: "#", icon: "🍲" },
    { nombre: "Clubes de Fútbol", tipo: "Deporte", link: "#", icon: "⚽" }
  ];

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f4f4f4', minHeight: '100vh', margin: 0 }}>
      
      {/* HEADER CON LOGO */}
      <header style={{ textAlign: 'center', padding: '2.5rem', background: '#fff' }}>
        <img 
          src="/img/logo.png" 
          alt="Logo Colores de la Chacarita" 
          style={{ maxWidth: '220px', display: 'block', margin: '0 auto 1.5rem auto' }} 
        />
        <Link href="/nosotros">
          <button style={{ padding: '12px 25px', backgroundColor: '#8e44ad', color: '#fff', border: 'none', borderRadius: '25px', fontWeight: 'bold', cursor: 'pointer' }}>
            ¿En qué consiste el Proyecto?
          </button>
        </Link>
      </header>

      <main style={{ padding: '1rem', maxWidth: '850px', margin: '0 auto' }}>

        {/* MAPA INTERACTIVO */}
        <section style={{ margin: '2rem 0', textAlign: 'center' }}>
          <h2 style={{ color: '#2c3e50', fontSize: '1.5rem' }}>📍 Mapa de Murales</h2>
          <div style={{ borderRadius: '20px', overflow: 'hidden', height: '350px', border: '2px solid #ddd', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d3606.9747!2d-57.6315!3d-25.2822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE2JzU1LjkiUyA1N8KwMzcnNTMuNCJX!5e0!3m2!1ses!2spy!4v1650000000000" 
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy">
            </iframe>
          </div>
        </section>

        {/* ANFITRIONES TURÍSTICOS */}
        <section style={{ margin: '3rem 0' }}>
            <h2 style={{ textAlign: 'center', color: '#d35400', marginBottom: '2rem' }}>👥 Anfitriones de Circuito Turístico</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
              {anfitriones.map((a, i) => (
                <div key={i} style={{ background: '#fff', borderRadius: '25px', overflow: 'hidden', boxShadow: '0 8px 20px rgba(0,0,0,0.1)', textAlign: 'center', border: '1px solid #ffcc66' }}>
                  <div style={{ 
                      height: '380px', 
                      backgroundImage: `url(${a.foto})`, 
                      backgroundSize: 'cover', 
                      backgroundPosition: 'center',
                      backgroundColor: '#eee'
                  }}></div>
                  <div style={{ padding: '1.5rem' }}>
                    <h3 style={{ margin: '0', color: '#e67e22', fontSize: '1.4rem' }}>{a.nombre}</h3>
                    <p style={{ color: '#7f8c8d', fontWeight: 'bold', margin: '10px 0 20px 0' }}>{a.rol}</p>
                    <a href={a.wa} target="_blank" rel="noreferrer">
                      <button style={{ width: '100%', padding: '15px', background: '#25D366', color: '#fff', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', fontSize: '1.1rem' }}>
                        Reservar Circuito
                      </button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
        </section>

        {/* CARRUSEL DE LUGARES DE INTERÉS */}
        <section style={{ margin: '3rem 0' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>🏙️ Lugares de Interés</h2>
          <div style={{ display: 'flex', overflowX: 'auto', gap: '15px', padding: '15px 5px' }}>
            {interes.map((item, i) => (
              <a href={item.link} target="_blank" rel="noreferrer" key={i} style={{ textDecoration: 'none' }}>
                <div style={{ minWidth: '220px', background: '#8e44ad', color: '#fff', padding: '30px', borderRadius: '20px', textAlign: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{item.icon}</div>
                  <h4 style={{ margin: '0 0 5px 0' }}>{item.nombre}</h4>
                  <small style={{ opacity: 0.8 }}>{item.tipo}</small>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* SECCIÓN AUSPICIANTE */}
        <section style={{ background: '#fff', padding: '2.5rem', borderRadius: '25px', textAlign: 'center', border: '3px dashed #8e44ad', margin: '3rem 0' }}>
          <h3 style={{ color: '#8e44ad' }}>¿Tenés un negocio en el barrio?</h3>
          <p style={{ marginBottom: '1.5rem' }}>Querés sumarte como auspiciante del proyecto</p>
          <a href={whatsappJuan} target="_blank" rel="noreferrer">
            <button style={{ background: '#8e44ad', color: '#fff', padding: '15px 40px', borderRadius: '35px', border: 'none', fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem' }}>
              PRESIONAR AQUÍ
            </button>
          </a>
        </section>

      </main>

      <footer style={{ textAlign: 'center', padding: '3rem', background: '#1a1a1a', color: '#fff' }}>
        <p>© 2026 Colores de la Chacarita - Juan Cáceres Muralista</p>
      </footer>
    </div>
  );
}
