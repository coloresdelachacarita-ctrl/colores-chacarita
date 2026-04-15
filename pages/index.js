import Link from 'next/link';

export default function Home() {
  // Enlaces de contacto
  const whatsappMurales = "https://wa.me/595981123456";
  const anfitriones = [
    {
      nombre: "Guía de la Chaca",
      rol: "Anfitrión Local",
      foto: "https://via.placeholder.com/400x420",
      wa: "https://wa.me/595981123456"
    }
  ];

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f4f4f4', minHeight: '100vh', color: '#333' }}>
      <header style={{ textAlign: 'center', padding: '2rem', background: '#fff' }}>
        <h1 style={{ color: '#d35400', marginBottom: '1rem' }}>Colores de la Chacarita</h1>
        <Link href="/nosotros">
          <button style={{ padding: '12px 24px', backgroundColor: '#8e44ad', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
            ¿En qué consiste el Proyecto?
          </button>
        </Link>
      </header>

      <main style={{ padding: '1rem', maxWidth: '600px', margin: '0 auto' }}>
        <section style={{ background: '#333', color: '#fff', padding: '1.5rem', borderRadius: '20px', textAlign: 'center', marginBottom: '2rem' }}>
          <h3 style={{ color: '#ffcc66' }}>🎨 ¿Buscás un Mural?</h3>
          <p>Transformamos espacios con arte y cultura.</p>
          <a href={whatsappMurales} target="_blank" rel="noreferrer">
            <button style={{ width: '100%', padding: '12px', marginTop: '10px', borderRadius: '10px', border: 'none', background: '#25D366', color: '#fff', fontWeight: 'bold' }}>
              Solicitar Presupuesto
            </button>
          </a>
        </section>

        <section>
          <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Anfitriones</h2>
          {anfitriones.map((a, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: '20px', overflow: 'hidden', marginBottom: '2rem', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
              <div style={{ height: '300px', backgroundImage: `url(${a.foto})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                <h3 style={{ margin: '0', color: '#ff6600' }}>{a.nombre}</h3>
                <p style={{ color: '#666' }}>{a.rol}</p>
                <a href={a.wa} target="_blank" rel="noreferrer">
                  <button style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #25D366', color: '#25D366', fontWeight: 'bold', background: 'transparent' }}>
                    Contactar
                  </button>
                </a>
              </div>
            </div>
          ))}
        </section>
      </main>

      <footer style={{ textAlign: 'center', padding: '2rem', background: '#1a1a1a', color: '#fff' }}>
        <p>© 2026 Colores de la Chacarita</p>
      </footer>
    </div>
  );
}


