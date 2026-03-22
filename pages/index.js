import Link from "next/link";

export default function Home() {
  const anfitriones = [
    {
      nombre: "Gonzalo Galeano",
      rol: "Mediador Cultural",
      wa: "https://wa.me/595961793791",
      ig: "https://www.instagram.com/gonza8511",
      foto: "/GONZALO,GALEANO.jpg"
    },
    {
      nombre: "Jose Luis Molas",
      rol: "Guía de Patrimonio",
      wa: "https://wa.me/595987418543",
      fb: "https://www.facebook.com/share/1BMUSbvY24/",
      foto: "/Jose,Luis,Molas.png"
    }
  ];

  // Tu enlace oficial de Patreon
  const linkPatreon = "https://patreon.com/coloresdelachacarita?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink";

  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif', 
      background: 'linear-gradient(to bottom, #fffdfb 0%, #ffecda 40%, #fbd9b9 100%)', 
      minHeight: '100vh', 
      paddingBottom: '3rem' 
    }}>
      
      {/* ENCABEZADO CON LOGO Y REDES */}
      <header style={{ textAlign: 'center', padding: '0' }}>
        <img src="/portada-.arte.png" alt="Colores de la Chacarita" style={{ width: '100%', height: 'auto', display: 'block' }} />
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', marginTop: '1.5rem', padding: '0 1rem' }}>
          <a href="https://www.tiktok.com/@colores.de.la.cha" target="_blank" rel="noreferrer"><button style={{ padding: '8px 12px', borderRadius: '20px', border: '1px solid #fff', background: 'black', color: '#fff', fontSize: '0.8rem', fontWeight: 'bold' }}>TikTok</button></a>
          <a href="https://www.youtube.com/@coloresdelachacarita" target="_blank" rel="noreferrer"><button style={{ padding: '8px 12px', borderRadius: '20px', border: 'none', background: '#FF0000', color: '#fff', fontSize: '0.8rem', fontWeight: 'bold' }}>YouTube</button></a>
          <a href="https://www.instagram.com/colores.de.la.chacarita" target="_blank" rel="noreferrer"><button style={{ padding: '8px 12px', borderRadius: '20px', border: 'none', background: 'linear-gradient(45deg, #f09433, #bc1888)', color: '#fff', fontSize: '0.8rem', fontWeight: 'bold' }}>Instagram</button></a>
          
          {/* BOTÓN DE PATREON OFICIAL */}
          <a href={linkPatreon} target="_blank" rel="noreferrer">
            <button style={{ padding: '8px 12px', borderRadius: '20px', border: 'none', background: '#f96854', color: '#fff', fontSize: '0.8rem', fontWeight: 'bold' }}>🧡 Patreon</button>
          </a>
        </div>

        <div style={{ padding: '2rem 1rem' }}>
          <Link href="/mapa">
            <button style={{ padding: '12px 30px', borderRadius: '30px', border: 'none', background: '#ff6600', color: '#fff', fontWeight: 'bold', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}>📍 Ver Mapa de Murales</button>
          </Link>
        </div>
      </header>

      {/* SECCIÓN DE ANFITRIONES */}
      <section style={{ padding: '1rem', maxWidth: '500px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', color: '#d35400' }}>👥 Anfitriones del Barrio</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center' }}>
          {anfitriones.map((a, i) => (
            <div key={i} style={{ width: '100%', background: '#fff', borderRadius: '20px', boxShadow: '0 8px 25px rgba(0,0,0,0.15)', overflow: 'hidden', border: '2px solid #ffcc66' }}>
              <div style={{ height: '400px', backgroundImage: `url(${a.foto})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                <h3 style={{ margin: '0', color: '#ff6600' }}>{a.nombre}</h3>
                <p style={{ fontWeight: 'bold', color: '#777' }}>{a.rol}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <a href={a.wa} target="_blank" rel="noreferrer"><button style={{ width: '100%', padding: '12px', borderRadius: '10px', border: 'none', background: '#25D366', color: '#fff', fontWeight: 'bold' }}>WhatsApp</button></a>
                  <a href={a.ig || a.fb} target="_blank" rel="noreferrer"><button style={{ width: '100%', padding: '12px', borderRadius: '10px', border: 'none', background: a.ig ? '#E1306C' : '#3b5998', color: '#fff', fontWeight: 'bold' }}>Social</button></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN DE DONACIONES CON TU ENLACE REAL */}
      <section style={{ margin: '3rem 1rem', padding: '2rem', background: '#fff', borderRadius: '20px', textAlign: 'center', border: '3px solid #f96854' }}>
        <h2 style={{ color: '#f96854' }}>🎁 Apoyá el Arte en la Chaca</h2>
        <p style={{ color: '#555', fontSize: '0.9rem', marginBottom: '15px' }}>Tu apoyo nos permite mantener los murales y seguir impulsando el turismo comunitario.</p>
        <a href={linkPatreon} target="_blank" rel="noreferrer">
          <button style={{ background: '#f96854', color: '#fff', padding: '15px 25px', borderRadius: '10px', border: 'none', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer' }}>
            Ser Mecenas en Patreon
          </button>
        </a>
      </section>

      {/* FOOTER */}
      <footer style={{ textAlign: 'center', padding: '3rem 1rem', background: '#1a1a1a' }}>
        <Link href="/suscripcion">
          <p style={{ color: '#ffcc66', textDecoration: 'underline', fontWeight: 'bold' }}>¿Tenes un comercio en la Chaca? Sumate acá</p>
        </Link>
        <p style={{ fontSize: '0.8rem', color: '#fff', opacity: '0.7' }}>© 2026 Colores de la Chacarita</p>
      </footer>
    </div>
  );
}
