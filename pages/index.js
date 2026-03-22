import Link from "next/link";

export default function Home() {
  const anfitriones = [
    {
      nombre: "Gonzalo Galeano",
      rol: "Anfitrión Turístico", 
      wa: "https://wa.me/595961793791",
      ig: "https://www.instagram.com/gonza8511",
      foto: "/GONZALO,GALEANO.jpg"
    },
    {
      nombre: "Jose Luis Molas",
      rol: "Anfitrión Turístico", 
      wa: "https://wa.me/595987418543",
      fb: "https://www.facebook.com/share/1BMUSbvY24/",
      foto: "/Jose,Luis,Molas.png"
    }
  ];

  const linkPatreon = "https://patreon.com/coloresdelachacarita?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink";
  
  // Tu número real para servicios de murales actualizado
  const whatsappMurales = "https://wa.me/595981220303"; 

  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif', 
      background: 'linear-gradient(to bottom, #fffdfb 0%, #ffecda 40%, #fbd9b9 100%)', 
      minHeight: '100vh', 
      paddingBottom: '3rem' 
    }}>
      
      {/* ENCABEZADO */}
      <header style={{ textAlign: 'center', padding: '0' }}>
        <img src="/portada-.arte.png" alt="Colores de la Chacarita" style={{ width: '100%', height: 'auto', display: 'block' }} />
        
        {/* REDES SOCIALES */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', marginTop: '1.5rem', padding: '0 1rem' }}>
          <a href="https://www.tiktok.com/@colores.de.la.cha" target="_blank" rel="noreferrer"><button style={{ padding: '8px 12px', borderRadius: '20px', border: '1px solid #fff', background: 'black', color: '#fff', fontSize: '0.8rem', fontWeight: 'bold' }}>TikTok</button></a>
          <a href="https://www.youtube.com/@coloresdelachacarita" target="_blank" rel="noreferrer"><button style={{ padding: '8px 12px', borderRadius: '20px', border: 'none', background: '#FF0000', color: '#fff', fontSize: '0.8rem', fontWeight: 'bold' }}>YouTube</button></a>
          <a href="https://www.instagram.com/colores.de.la.chacarita" target="_blank" rel="noreferrer"><button style={{ padding: '8px 12px', borderRadius: '20px', border: 'none', background: 'linear-gradient(45deg, #f09433, #bc1888)', color: '#fff', fontSize: '0.8rem', fontWeight: 'bold' }}>Instagram</button></a>
          <a href={linkPatreon} target="_blank" rel="noreferrer"><button style={{ padding: '8px 12px', borderRadius: '20px', border: 'none', background: '#f96854', color: '#fff', fontSize: '0.8rem', fontWeight: 'bold' }}>🧡 Patreon</button></a>
        </div>

        <div style={{ padding: '2rem 1rem' }}>
          <Link href="/mapa">
            <button style={{ padding: '15px 40px', borderRadius: '30px', border: 'none', background: '#ff6600', color: '#fff', fontWeight: 'bold', fontSize: '1.1rem', boxShadow: '0 4px 15px rgba(255,102,0,0.4)' }}>📍 EXPLORAR MAPA</button>
          </Link>
        </div>
      </header>

      {/* SECCIÓN: CONTRATAR MURALES */}
      <section style={{ margin: '1rem', padding: '1.5rem', background: '#333', color: '#fff', borderRadius: '20px', textAlign: 'center' }}>
        <h3 style={{ margin: '0 0 10px 0', color: '#ffcc66' }}>🎨 ¿Buscás un Mural?</h3>
        <p style={{ fontSize: '0.9rem', marginBottom: '15px' }}>Transformamos tus espacios con arte y cultura paraguaya.</p>
        <a href={whatsappMurales} target="_blank" rel="noreferrer">
          <button style={{ background: '#25D366', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}>
            Solicitar Presupuesto por WhatsApp
          </button>
        </a>
      </section>

      {/* ANFITRIONES */}
      <section style={{ padding: '1rem', maxWidth: '500px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', color: '#d35400' }}>👥 Anfitriones del Barrio</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center' }}>
          {anfitriones.map((a, i) => (
            <div key={i} style={{ width: '100%', background: '#fff', borderRadius: '20px', boxShadow: '0 8px 25px rgba(0,0,0,0.15)', overflow: 'hidden', border: '2px solid #ffcc66' }}>
              <div style={{ height: '420px', backgroundImage: `url(${a.foto})`, backgroundSize: 'cover', backgroundPosition: 'top' }}></div>
              <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                <h3 style={{ margin: '0', color: '#ff6600' }}>{a.nombre}</h3>
                <p style={{ fontWeight: 'bold', color: '#777' }}>{a.rol}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <a href={a.wa} target="_blank" rel="noreferrer"><button style={{ width: '100%', padding: '12px', borderRadius: '10px', border: 'none', background: '#25D366', color: '#fff', fontWeight: 'bold' }}>Contactar Guía</button></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* APOYO PATREON */}
      <section style={{ margin: '3rem 1rem', padding: '2rem', background: '#fff', borderRadius: '20px', textAlign: 'center', border: '3px solid #f96854' }}>
        <h2 style={{ color: '#f96854' }}>🎁 Apoyá el Proyecto</h2>
        <a href={linkPatreon} target="_blank" rel="noreferrer">
          <button style={{ background: '#f96854', color: '#fff', padding: '15px 25px', borderRadius: '10px', border: 'none', fontWeight: 'bold' }}>Ser Mecenas en Patreon</button>
        </a>
      </section>

      {/* FOOTER CON CONTADOR */}
      <footer style={{ marginTop: '4rem', textAlign: 'center', padding: '3rem 1rem', background: '#1a1a1a', color: '#fff' }}>
        <Link href="/suscripcion">
          <p style={{ color: '#ffcc66', textDecoration: 'underline', fontWeight: 'bold', cursor: 'pointer' }}>¿Tenes un comercio en la Chaca? Sumate acá</p>
        </Link>
        
        {/* CONTADOR DE VISITAS */}
        <div style={{ marginTop: '20px', opacity: '0.8' }}>
          <p style={{ fontSize: '0.7rem', marginBottom: '5px' }}>Visitantes:</p>
          <a href="https://www.freecounterstat.com" title="contadores web"><img src="https://counter9.optistats.ovh/private/freecounterstat.php?c=8l8u6m9f4n5y7u3w1q2r3t4z5x6c7v8b" border="0" title="contadores web" alt="contadores web"/></a>
        </div>
        
        <p style={{ fontSize: '0.8rem', marginTop: '20px', opacity: '0.5' }}>© 2026 Colores de la Chacarita</p>
      </footer>
    </div>
  );
}
