import Link from 'next/link';

export default function Home() {
  const whatsappMurales = "https://wa.me/595981234567";
  const linkPatreon = "https://www.patreon.com/coloresdelachacarita";
  const anfitriones = [
    {
      nombre: "Anfitrión 1",
      rol: "Guía Cultural",
      foto: "https://via.placeholder.com/400x420",
      wa: "https://wa.me/595981234567"
    }
  ];

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
      <header style={{ textAlign: 'center', padding: '1.5rem', background: '#fff', borderBottom: '1px solid #ddd' }}>
        <Link href="/nosotros">
          <button style={{ padding: '12px 24px', backgroundColor: '#8e44ad', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '1rem', fontWeight: 'bold' }}>
            ¿En qué consiste el Proyecto?
          </button>
        </Link>
      </header>

      <section style={{ margin: '1rem', padding: '1.5rem', background: '#333', color: '#fff', borderRadius: '20px', textAlign: 'center' }}>
        <h3 style={{ margin: '0 0 10px 0', color: '#ffcc66' }}>🎨 ¿Buscás un Mural?</h3>
        <p style={{ fontSize: '0.9rem', marginBottom: '15px' }}>Transformamos espacios con arte y cultura.</p>
        <a href={whatsappMurales} target="_blank" rel="noreferrer">
          <button style={{ width: '100%', padding: '12px', borderRadius: '10px', border: 'none', background: '#25D366', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}>
            Solicitar Presupuesto
          </button>
        </a>
      </section>

      <section style={{ padding: '1rem', maxWidth: '500px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', color: '#d35400', marginBottom: '1.5rem' }}>👥 Anfitriones del Barrio</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center' }}>
          {anfitriones.map((a, i) => (
            <div key={i} style={{ width: '100%', background: '#fff', borderRadius: '20px', boxShadow: '0 8px 25px rgba(0,0,0,0.15)', overflow: 'hidden', border: '2px solid #ffcc66' }}>
              <div style={{ height: '420px', backgroundImage: `url(${a.foto})`, backgroundSize: 'cover', backgroundPosition: 'top', backgroundColor: '#eee' }}></div>
              <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                <h3 style={{ margin: '0', color: '#ff6600', fontSize: '1.4rem' }}>{a.nombre}</h3>
                <p style={{ fontWeight: 'bold', color: '#777', marginBottom: '15px' }}>{a.rol}</p>
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

      <footer style={{ marginTop: '4rem', textAlign: 'center', padding: '3rem 1rem', background: '#1a1a1a', color: '#fff' }}>
        <Link href="/suscripcion">
          <p style={{ color: '#ffcc66', textDecoration: 'underline', fontWeight: 'bold', cursor: 'pointer' }}>¿Tenés un comercio en la Chaca? Sumate acá</p>
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
