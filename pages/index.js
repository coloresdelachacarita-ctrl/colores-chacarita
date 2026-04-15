import Link from 'next/link';

export default function Home() {
  const whatsappJuan = "https://wa.me/595981220303";
  const mensajeMural = encodeURIComponent("Hola Juan Caceres, me interesa asesorarme para un mural artístico.");
  const mensajeAuspiciante = encodeURIComponent("Hola Juan, tengo un negocio en el barrio y quiero sumarme como auspiciante del proyecto.");
  const mensajeCircuito = encodeURIComponent("Hola, quiero realizar el circuito turístico.\nHorario: \nDía: \nFecha: \nCantidad de participantes: ");

  // Enlaces de Redes Sociales
  const linkIG = "https://www.instagram.com/colores.de.la.chacarita?igsh=MTNrNHc3OWtxODYxbg==";
  const linkTT = "https://www.tiktok.com/@colores.de.la.cha";
  const linkFB = "https://www.facebook.com/profile.php?id=100083103444318"; // Link de tu captura
  const linkPT = "https://www.patreon.com/c/coloresdelachacarita";

  const anfitriones = [
    {
      nombre: "Gonzalo Galeano",
      rol: "Anfitrión Turístico",
      foto: "/GONZALO,GALEANO.jpg", 
      wa: `https://wa.me/595961793791?text=${mensajeCircuito}`
    },
    {
      nombre: "José Luis Molas",
      rol: "Anfitrión Turístico",
      foto: "/Jose,Luis,Molas.png",
      wa: `https://wa.me/595986227141?text=${mensajeCircuito}`
    }
  ];

  const lugaresInteres = [
    { nombre: "Hostal Letra Libre", tipo: "El mejor Hostel de Asunción", link: "https://www.airbnb.com/h/letrafree1", icon: "🏠" },
    { nombre: "Casa Museo José A. Flores", tipo: "Cultura y Guarania", link: "#", icon: "🎻" },
    { nombre: "Clubes de Fútbol", tipo: "Resistencia / Oriental", link: "#", icon: "⚽" },
    { nombre: "Gastronomía", tipo: "Comedores, Bares y Confitería", link: "#", icon: "🍲" },
    { nombre: "Comercios", tipo: "Bodegas y Almacenes", link: "#", icon: "🛍️" }
  ];

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f4f4f4', minHeight: '100vh', margin: 0, padding: 0 }}>
      
      {/* CABECERA: PORTADA GIGANTE */}
      <header style={{ width: '100%', padding: 0, background: '#fff' }}>
        <img 
          src="/portada-.arte.png" 
          alt="Portada Colores de la Chacarita" 
          style={{ width: '100%', height: 'auto', display: 'block' }} 
          onError={(e) => { e.target.src = "https://via.placeholder.com/1200x400?text=Colores+de+la+Chacarita"; }}
        />
      </header>

      <main style={{ padding: '1rem', maxWidth: '850px', margin: '0 auto' }}>

        {/* BOTONES DE REDES SOCIALES */}
        <section style={{ textAlign: 'center', margin: '2rem 0' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href={linkIG} target="_blank" rel="noreferrer"><button style={{ padding: '10px 15px', backgroundColor: '#E1306C', color: '#fff', border: 'none', borderRadius: '25px', fontWeight: 'bold', cursor: 'pointer' }}>📸 Instagram</button></a>
            <a href={linkTT} target="_blank" rel="noreferrer"><button style={{ padding: '10px 15px', backgroundColor: '#010101', color: '#fff', border: 'none', borderRadius: '25px', fontWeight: 'bold', cursor: 'pointer' }}>TikTok</button></a>
            <a href={linkFB} target="_blank" rel="noreferrer" style={{ fontSize: '1.5rem', textDecoration: 'none' }}>🔵 FB</a>
            <a href={linkPT} target="_blank" rel="noreferrer" style={{ color: '#f96854', fontSize: '1.2rem', fontWeight: 'bold', textDecoration: 'none' }}>Patreon</a>
          </div>
        </section>

        {/* BOTÓN CONTACTO JUAN CACERES - MURALES */}
        <section style={{ background: '#333', color: '#fff', padding: '2rem', borderRadius: '25px', textAlign: 'center', margin: '2rem 0', boxShadow: '0 8px 16px rgba(0,0,0,0.2)' }}>
          <h2 style={{ color: '#ffcc66', margin: '0 0 10px 0' }}>🎨 ¿Querés un mural artístico?</h2>
          <p style={{ marginBottom: '20px' }}>Contactanos aquí y te asesoramos.</p>
          <a href={`${whatsappJuan}?text=${mensajeMural}`} target="_blank" rel="noreferrer">
            <button style={{ background: '#25D366', color: '#fff', padding: '15px 30px', borderRadius: '35px', border: 'none', fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem' }}>
              CONTACTAR A JUAN CACERES
            </button>
          </a>
        </section>

        {/* MAPA */}
        <section style={{ margin: '3rem 0', textAlign: 'center' }}>
          <h2 style={{ color: '#2c3e50', marginBottom: '1.5rem' }}>📍 Mapa de Murales</h2>
          <div style={{ borderRadius: '20px', overflow: 'hidden', height: '400px', border: '2px solid #ddd' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.851412030113!2d-57.6322!3d-25.2818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE2JzU0LjUiUyA1N8KwMzcnNTUuOSJX!5e0!3m2!1ses!2spy!4v1713200000000" 
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy">
            </iframe>
          </div>
        </section>

        {/* ANFITRIONES */}
        <section style={{ margin: '3rem 0' }}>
            <h2 style={{ textAlign: 'center', color: '#d35400', marginBottom: '2rem' }}>👥 Anfitriones de Circuito Turístico</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
              {anfitriones.map((a, i) => (
                <div key={i} style={{ background: '#fff', borderRadius: '25px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', textAlign: 'center', border: '1px solid #ffcc66' }}>
                  <div style={{ height: '350px', backgroundImage: `url(${a.foto})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#eee' }}></div>
                  <div style={{ padding: '1.5rem' }}>
                    <h3 style={{ margin: '0', color: '#e67e22' }}>{a.nombre}</h3>
                    <p style={{ color: '#7f8c8d', fontWeight: 'bold', margin: '10px 0' }}>{a.rol}</p>
                    <a href={a.wa} target="_blank" rel="noreferrer">
                      <button style={{ width: '100%', padding: '12px', background: '#25D366', color: '#fff', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer' }}>Reservar Circuito</button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
        </section>

        {/* CARRUSEL DE LUGARES DE INTERÉS */}
        <section style={{ margin: '4rem 0' }}>
          <h2 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '1.5rem' }}>🏙️ Lugares de Interés en el Barrio</h2>
          <div style={{ display: 'flex', overflowX: 'auto', gap: '15px', padding: '10px 5px' }}>
            {lugaresInteres.map((l, i) => (
              <a href={l.link} target="_blank" rel="noreferrer" key={i} style={{ textDecoration: 'none' }}>
                <div style={{ minWidth: '240px', background: '#8e44ad', color: '#fff', padding: '25px', borderRadius: '20px', textAlign: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{l.icon}</div>
                  <h4 style={{ margin: '0 0 5px 0' }}>{l.nombre}</h4>
                  <small style={{ opacity: 0.9 }}>{l.tipo}</small>
                  {l.link !== "#" && <p style={{ fontSize: '0.7rem', marginTop: '10px', textDecoration: 'underline' }}>Ver más</p>}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* BOTÓN AUSPICIANTE */}
        <section style={{ background: '#fff', padding: '2.5rem', borderRadius: '25px', textAlign: 'center', border: '3px dashed #8e44ad', margin: '3rem 0' }}>
          <h3 style={{ color: '#8e44ad', margin: '0 0 10px 0' }}>¿Tenés un negocio en el barrio?</h3>
          <p style={{ marginBottom: '20px' }}>Sumate como auspiciante del proyecto aquí:</p>
          <a href={`${whatsappJuan}?text=${mensajeAuspiciante}`} target="_blank" rel="noreferrer">
            <button style={{ background: '#8e44ad', color: '#fff', padding: '15px 35px', borderRadius: '35px', border: 'none', fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem' }}>
              SUMAR MI NEGOCIO (+595 981 220303)
            </button>
          </a>
        </section>

      </main>

      <footer style={{ textAlign: 'center', padding: '3rem', background: '#1a1a1a', color: '#fff' }}>
        <p>© 2026 Colores de la Chacarita - Juan Caceres Muralista</p>
      </footer>
    </div>
  );
}
