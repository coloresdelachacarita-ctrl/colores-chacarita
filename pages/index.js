import Link from 'next/link';

export default function Home() {
  const whatsappMurales = "https://wa.me/595981234567"; 
  const linkPatreon = "https://www.patreon.com/coloresdelachacarita";
  
  const anfitriones = [
    {
      nombre: "Juan Carlos",
      rol: "Artista Muralista",
      foto: "/img/perfil-juan.jpg", // <--- REVISÁ QUE ESTE ARCHIVO ESTÉ EN public/img/
      wa: "https://wa.me/595981234567"
    },
    {
      nombre: "Anfitrión Local",
      rol: "Guía de Barrio",
      foto: "/img/corazon.png", // <--- USAMOS LA DEL CORAZÓN COMO PRUEBA SI LA OTRA NO ESTÁ
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
          style={{ maxWidth: '200px', marginBottom: '1.5rem', display: 'block', margin: '0 auto' }} 
          onError={(e) => { e.target.style.display = 'none'; }} // Si no encuentra el logo, no muestra el icono roto
        />
        <h1 style={{ color: '#d35400', fontSize: '1.8rem', margin: '10px 0' }}>Colores de la Chacarita</h1>
        <Link href="/nosotros">
          <button style={{ padding: '12px 24px', backgroundColor: '#8e44ad', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
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
                {/* DIV DE IMAGEN: Si no carga la foto, se verá un fondo gris */}
                <div style={{ 
                  height: '350px', 
                  backgroundColor: '#eee',
                  backgroundImage: `url(${a.foto})`, 
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center' 
                }}></div>
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

      </main>

      <footer style={{ textAlign: 'center', padding: '3rem 1rem', background: '#1a1a1a', color: '#fff', marginTop: '3rem' }}>
        <p>© 2026 Colores de la Chacarita</p>
      </footer>
    </div>
  );
}
