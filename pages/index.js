export default function Home() {
  const whatsappMurales = "https://wa.me/595981123456";
  
  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f4f4f4', minHeight: '100vh', margin: 0, padding: 0 }}>
      <header style={{ textAlign: 'center', padding: '2rem', background: '#fff', borderBottom: '1px solid #eee' }}>
        <h1 style={{ color: '#d35400', margin: '0 0 1rem 0' }}>Colores de la Chacarita</h1>
        <a href="/nosotros" style={{ textDecoration: 'none' }}>
          <button style={{ padding: '12px 24px', backgroundColor: '#8e44ad', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
            ¿En qué consiste el Proyecto?
          </button>
        </a>
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

        <section style={{ textAlign: 'center', padding: '2rem', background: '#fff', borderRadius: '20px' }}>
          <h2 style={{ color: '#ff6600' }}>¡Bienvenidos!</h2>
          <p>Explorá la historia y el arte del barrio más emblemático de Asunción.</p>
        </section>
      </main>

      <footer style={{ textAlign: 'center', padding: '3rem 1rem', background: '#1a1a1a', color: '#fff', marginTop: '3rem' }}>
        <p>© 2026 Colores de la Chacarita</p>
      </footer>
    </div>
  );
}
