import Link from 'next/link';

export default function Home() {
  const whatsappJuan = "https://wa.me/595981220303";
  const mensajeMural = encodeURIComponent("Hola Juan Caceres, me interesa asesorarme para un mural artístico.");
  const mensajeCircuito = encodeURIComponent("Hola, quiero realizar el circuito turístico.\nHorario: \nDía: \nFecha: \nCantidad de participantes: ");

  // Enlaces de Redes Sociales
  const linkIG = "https://www.instagram.com/colores.de.la.chacarita?igsh=MTNrNHc3OWtxODYxbg==";
  const linkTT = "https://www.tiktok.com/@colores.de.la.cha";
  const linkFB = "#"; // Reemplaza con tu link real si lo tienes
  const linkPT = "https://www.patreon.com/coloresdelachacarita"; // Link de Patreon provisto anteriormente

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

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f4f4f4', minHeight: '100vh', margin: 0, padding: 0 }}>
      
      {/* CABECERA: PORTADA GIGANTE A TODO ANCHO */}
      <header style={{ width: '100%', padding: 0, background: '#fff' }}>
        <img 
          src="/portada-.arte.png" 
          alt="Portada Colores de la Chacarita" 
          style={{ width: '100%', height: 'auto', display: 'block' }} 
          onError={(e) => { e.target.src = "https://via.placeholder.com/1200x400?text=Colores+de+la+Chacarita"; }}
        />
      </header>

      <main style={{ padding: '1rem', maxWidth: '850px', margin: '0 auto' }}>

        {/* BOTONES DE REDES SOCIALES Y PATREON */}
        <section style={{ textAlign: 'center', margin: '2rem 0' }}>
          <p style={{ color: '#555', marginBottom: '15px', fontWeight: 'bold' }}>Seguinos y apoyanos en:</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
            
            {/* INSTAGRAM */}
            <a href={linkIG} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
              <button style={{ padding: '10px 20px', backgroundColor: '#E1306C', color: '#fff', border: 'none', borderRadius: '25px', fontWeight: 'bold', cursor: 'pointer', fontSize: '0.9rem' }}>
                📸 Instagram
              </button>
            </a>

            {/* TIKTOK */}
            <a href={linkTT} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
              <button style={{ padding: '10px 20px', backgroundColor: '#010101', color: '#fff', border: 'none', borderRadius: '25px', fontWeight: 'bold', cursor: 'pointer', fontSize: '0.9rem' }}>
                TikTok
              </button>
            </a>

            {/* FACEBOOK */}
            <a href={linkFB} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: '#1877F2', fontSize: '1.5rem', alignSelf: 'center' }}>
              🔵 FB
            </a>

            {/* PATREON */}
            <a href={linkPT} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: '#f96854', fontSize: '1.5rem', alignSelf: 'center', fontWeight: 'bold' }}>
              Patreon
            </a>

          </div>
        </section>

        {/* SECCIÓN MURALES CON JUAN CACERES (SIN ACENTO) */}
        <section style={{ background: '#333', color: '#fff', padding: '2.5rem', borderRadius: '25px', textAlign: 'center', margin: '3rem 0', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}>
          <h2 style={{ color: '#ffcc66', margin: '0 0 10px 0' }}>🎨 ¿Querés un mural artístico?</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>Contactanos aquí y te asesoramos.</p>
          <a href={`${whatsappJuan}?text=${mensajeMural}`} target="_blank" rel="noreferrer">
            <button style={{ background: '#25D366', color: '#fff', padding: '15px 40px', borderRadius: '35px', border: 'none', fontWeight: 'bold', cursor: 'pointer', fontSize: '1.1rem' }}>
              CONTACTAR A JUAN CACERES
            </button>
          </a>
        </section>

        {/* MAPA INTERACTIVO CORREGIDO: PUNTO EN LA CHACARITA, ASUNCIÓN */}
        <section style={{ margin: '3rem 0', textAlign: 'center' }}>
          <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginBottom: '1.5rem' }}>📍 Mapa de Murales</h2>
          <div style={{ borderRadius: '20px', overflow: 'hidden', height: '400px', border: '2px solid #ddd', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.8623661206126!2d-57.6322976!3d-25.281895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9408e063f912e753%3A0x6b4ac0b79339e728!2sLa%20Chacarita%2C%20Asunci%C3%B3n%2C%20Paraguay!5e0!3m2!1ses-419!2spy!4v1713214589210!5m2!1ses-419!2spy" 
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy">
            </iframe>
          </div>
        </section>

        {/* ANFITRIONES */}
        <section style={{ margin: '3rem 0' }}>
            <h2 style={{ textAlign: 'center', color: '#d35400', marginBottom: '2rem' }}>👥 Anfitriones de Circuito Turístico</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
              {anfitriones.map((a, i) => (
                <div key={i} style={{ background: '#fff', borderRadius: '25px', overflow: 'hidden', boxShadow: '0 8px 20px rgba(0,0,0,0.1)', textAlign: 'center', border: '1px solid #ffcc66' }}>
                  <div style={{ height: '380px', backgroundImage: `url(${a.foto})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#eee' }}></div>
                  <div style={{ padding: '1.5rem' }}>
                    <h3 style={{ margin: '0', color: '#e67e22' }}>{a.nombre}</h3>
                    <p style={{ color: '#7f8c8d', fontWeight: 'bold', margin: '10px 0 20px 0' }}>{a.rol}</p>
                    <a href={a.wa} target="_blank" rel="noreferrer">
                      <button style={{ width: '100%', padding: '15px', background: '#25D366', color: '#fff', border: 'none', borderRadius: '12px', fontWeight: 'bold' }}>
                        Reservar Circuito
                      </button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
        </section>

      </main>

      <footer style={{ textAlign: 'center', padding: '3rem', background: '#1a1a1a', color: '#fff' }}>
        <p>© 2026 Colores de la Chacarita - Juan Caceres Muralista</p>
      </footer>
    </div>
  );
}
