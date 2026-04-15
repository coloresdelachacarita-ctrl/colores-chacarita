import Link from 'next/link';

export default function Home() {
  // Configuración de datos
  const whatsappMurales = "https://wa.me/595981234567"; // Poné tu número real acá
  const linkPatreon = "https://www.patreon.com/coloresdelachacarita";
  
  const anfitriones = [
    {
      nombre: "Juan Carlos",
      rol: "Artista Muralista",
      foto: "/img/perfil-juan.jpg", // Asegurate que esta ruta sea correcta en tu carpeta public
      wa: "https://wa.me/595981234567"
    },
    {
      nombre: "Anfitrión Local",
      rol: "Guía de Barrio",
      foto: "https://via.placeholder.com/400x420",
      wa: "https://wa.me/595981234567"
    }
  ];

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f4f4f4', minHeight: '100vh', margin: 0 }}>
      
      {/* CABECERA CON LOGO */}
      <header style={{ textAlign: 'center', padding: '2rem', background: '#fff', borderBottom: '1px solid #eee' }}>
        <img 
          src="/img/logo.png" 
          alt="Logo Colores de la Chacarita" 
          style={{ maxWidth: '200px', marginBottom: '1.5rem' }} 
        />
        <br />
        <Link href="/nosotros">
          <button style={{
            padding: '12px 24px',
            backgroundColor: '#8e44ad',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}>
            ¿En qué consiste el Proyecto?
          </button>
        </Link>
      </header>

      <main style={{ padding: '1rem', maxWidth: '600px', margin: '0 auto' }}>
        
        {/* SECCIÓN MURALES */}
        <section style={{ background: '#333', color: '#fff', padding: '2rem', borderRadius: '20px', textAlign: 'center', margin: '2rem 0' }}>
          <h3 style={{ color: '#ffcc66', marginTop: 0 }}>🎨 ¿Buscás un Mural?</h3>
          <p>Transformamos espacios con arte y cultura.</p>
          <a href={whatsappMurales} target="_blank" rel="noreferrer">
            <button style={{ width: '100%', padding: '15px', borderRadius: '10px', border: 'none', background: '#25D366', color: '#fff', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}>
              Solicitar Presupuesto
            </button>
          </a>
        </section>

        {/* SECCIÓN ANFITRIONES */}
        <section>
          <h2 style={{ textAlign: 'center', color: '#d35400', marginBottom: '1.5rem' }}>👥 Anfitriones del Barrio</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            {anfitriones.map((a, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', border: '1px solid #ffcc66' }}>
                <div style={{ height: '350px', backgroundImage: `url(${a.foto})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#eee' }}></div>
                <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                  <h3 style={{ margin: '0', color: '#ff6600' }}>{a.nombre}</h3>
                  <p style={{ fontWeight: 'bold', color: '#777' }}>{a.rol}</p>
                  <a href={a.wa} target="_blank" rel="noreferrer">
                    <button style={{ width: '100%', padding: '12px', borderRadius: '10px', border: 'none', background: '#25D366', color: '#fff', fontWeight: 'bold' }}>
                      Agendar Recorrido
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECCIÓN PATREON */}
        <section style={{ margin: '3rem 0', padding: '2rem', background: '#fff', borderRadius: '20px', textAlign: 'center', border: '3px solid #f96854' }}>
          <h2 style={{ color: '#f96854', marginTop: 0 }}>🎁 Apoyá a la Chaca</h2>
          <a href={linkPatreon} target="_blank" rel="noreferrer">
            <button style={{ background: '#f96854', color: '#fff', padding: '15px 25px', borderRadius: '10px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>
              Ser Mecenas en Patreon
            </button>
          </a>
        </section>

      </main>

      {/* FOOTER CON CONTADOR */}
      <footer style={{ textAlign: 'center', padding: '3rem 1rem', background: '#1a1a1a', color: '#fff', marginTop: '3rem' }}>
        <Link href="/suscripcion">
          <p style={{ color: '#ffcc66', textDecoration: 'underline', cursor: 'pointer' }}>¿Tenés un comercio en la Chaca? Sumate acá</p>
        </Link>
        <div style={{ marginTop: '20px', opacity: '0.8' }}>
            <p style={{ fontSize: '0.7rem', marginBottom: '5px' }}>Visitantes:</p>
            <img src="https://counter9.optistats.ovh/private/freecounterstat.php?c=818u6m9f4n5y7u3w1q2r3t4z5x6c7v8b" border="0" alt="contador" />
        </div>
        <p style={{ fontSize: '0.8rem', marginTop: '20px', opacity: '0.5' }}>© 2026 Colores de la Chacarita</p>
      </footer>
    </div>
  );
}
