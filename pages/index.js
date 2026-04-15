import Link from 'next/link';

export default function Home() {
  const whatsappJuan = "https://wa.me/595981220303";
  const mensajeMural = encodeURIComponent("Hola Juan, me interesa asesorarme para un mural artístico.");
  const mensajeCircuito = encodeURIComponent("Hola, quiero realizar el circuito turístico.\nHorario: \nDía: \nFecha: \nCantidad de participantes: ");

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
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f4f4f4', minHeight: '100vh', margin: 0 }}>
      
      {/* HEADER CON LOGO CORREGIDO */}
      <header style={{ textAlign: 'center', padding: '2.5rem', background: '#fff' }}>
        <img 
          src="/portada-.arte.png" 
          alt="Logo Colores de la Chacarita" 
          style={{ maxWidth: '220px', display: 'block', margin: '0 auto 1.5rem auto' }} 
          onError={(e) => { e.target.src = "https://via.placeholder.com/220x100?text=Colores+Chacarita"; }}
        />
        <Link href="/nosotros">
          <button style={{ padding: '12px 25px', backgroundColor: '#8e44ad', color: '#fff', border: 'none', borderRadius: '25px', fontWeight: 'bold', cursor: 'pointer' }}>
            ¿En qué consiste el Proyecto?
          </button>
        </Link>
      </header>

      <main style={{ padding: '1rem', maxWidth: '850px', margin: '0 auto' }}>

        {/* SECCIÓN MURALES (NUEVA) */}
        <section style={{ background: '#333', color: '#fff', padding: '2.5rem', borderRadius: '25px', textAlign: 'center', margin: '1rem 0 3rem 0', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}>
          <h2 style={{ color: '#ffcc66', margin: '0 0 10px 0' }}>🎨 ¿Querés un mural artístico?</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>Contactanos aquí y te asesoramos.</p>
          <a href={`${whatsappJuan}?text=${mensajeMural}`} target="_blank" rel="noreferrer">
            <button style={{ background: '#25D366', color: '#fff', padding: '15px 40px', borderRadius: '35px', border: 'none', fontWeight: 'bold', cursor: 'pointer', fontSize: '1.1rem' }}>
              CONTACTAR A JUAN CÁCERES
            </button>
          </a>
        </section>

        {/* MAPA INTERACTIVO CORREGIDO */}
        <section style={{ margin: '2rem 0', textAlign: 'center' }}>
          <h2 style={{ color: '#2c3e50', fontSize: '1.5rem' }}>📍 Mapa de Murales</h2>
          <div style={{ borderRadius: '20px', overflow: 'hidden', height: '400px', border: '2px solid #ddd' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.84157448375!2d-57.6321456!3d-25.2759368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da78f69f2e3f5%3A0x6d9f3f3f3f3f3f3f!2sLa%20Chacarita%2C%20Asunci%C3%B33n!5e0!3m2!1ses!2spy!4v1713210000000" 
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
        <p>© 2026 Colores de la Chacarita - Juan Cáceres Muralista</p>
      </footer>
    </div>
  );
}
