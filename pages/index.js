import Link from 'next/link';

export default function Home() {
  const whatsappMurales = "https://wa.me/595981234567"; 
  
  const anfitriones = [
    {
      nombre: "Juan Carlos",
      rol: "Artista Muralista",
      // Si esta foto no existe, se verá gris, pero el código no se rompe
      foto: "/img/perfil-juan.jpg", 
      wa: "https://wa.me/595981234567"
    },
    {
      nombre: "Anfitrión Local",
      rol: "Guía de Barrio",
      foto: "/img/corazon.png",
      wa: "https://wa.me/595981234567"
    }
  ];

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f4f4f4', minHeight: '100vh', margin: 0 }}>
      
      <header style={{ textAlign: 'center', padding: '2rem', background: '#fff', borderBottom: '1px solid #eee' }}>
        {/* LOGO: He añadido un borde para que veas dónde debería estar */}
        <div style={{ maxWidth: '200px', margin: '0 auto 1.5rem auto' }}>
          <img 
            src="/img/logo.png" 
            alt="Colores de la Chacarita" 
            style={{ width: '100%', height: 'auto', display: 'block' }}
            onError={(e) => { e.target.src = "https://via.placeholder.com/200x100?text=Logo+Chacarita"; }} 
          />
        </div>
        
        <Link href="/nosotros">
          <button style={{ padding: '12px 24px', backgroundColor: '#8e44ad', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
            ¿En qué consiste el Proyecto?
          </button>
        </Link>
      </header>

      <main style={{ padding: '1rem', maxWidth: '600px', margin: '0 auto' }}>
        
        <section style={{ background: '#333', color: '#fff', padding: '2rem', borderRadius: '20px', textAlign: 'center', margin: '2rem 0' }}>
          <h3 style={{ color: '#ffcc66', marginTop: 0 }}>🎨 ¿Buscás un Mural?</h3>
          <p>Transformamos espacios con arte y cultura.</p>
          <a href={whatsappMurales} target="_blank" rel="noreferrer">
            <button style={{ width: '100%', padding: '15px', borderRadius: '10px', border: 'none', background: '#25D366', color: '#fff', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}>
              Solicitar Presupuesto
            </button>
          </a>
        </section>

        <section>
          <h2 style={{ textAlign: 'center', color: '#d35400', marginBottom: '1.5rem' }}>👥 Anfitriones del Barrio</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            {anfitriones.map((a, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', border: '1px solid #ffcc66' }}>
                <div style={{ 
                  height: '350px', 
                  backgroundColor: '#ddd',
                  backgroundImage: `url(${a.foto})`, 
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center' 
                }}>
                  {/* Si no carga la imagen, este texto aparecerá de fondo para que sepas qué falta */}
                  <div style={{ padding: '150px 0', textAlign: 'center', color: '#999', fontSize: '0.8rem' }}>
                    Sin imagen: {a.foto}
                  </div>
                </div>
                <div style={{ padding: '1.5rem', textAlign: 'center', position: 'relative', background: '#fff' }}>
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
