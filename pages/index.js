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

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', background: '#fefaf6', minHeight: '100vh', paddingBottom: '3rem' }}>
      
      {/* ENCABEZADO CON EL LOGO - NOMBRE CORREGIDO */}
      <header style={{ textAlign: 'center', padding: '0', background: '#fefaf6' }}>
        <img 
          src="/portada-.arte.png" 
          alt="Colores de la Chacarita" 
          style={{ width: '100%', height: 'auto', display: 'block' }} 
        />
        
        <div style={{ padding: '1.5rem', display: 'flex', justifyContent: 'center' }}>
          <Link href="/mapa">
            <button style={{ padding: '12px 30px', borderRadius: '30px', border: 'none', background: '#ff6600', color: '#fff', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}>
              📍 Ver Mapa de Murales
            </button>
          </Link>
        </div>
      </header>

      {/* SECCIÓN DE ANFITRIONES */}
      <section style={{ padding: '1rem', maxWidth: '500px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', color: '#d35400', marginBottom: '2rem' }}>👥 Anfitriones del Barrio</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center' }}>
          {anfitriones.map((a, i) => (
            <div key={i} style={{ 
              width: '100%', 
              background: '#fff', 
              borderRadius: '20px', 
              boxShadow: '0 8px 20px rgba(0,0,0,0.1)', 
              overflow: 'hidden',
              border: '2px solid #ffcc66'
            }}>
              <div style={{ 
                height: '400px', 
                backgroundImage: `url(${a.foto})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                backgroundColor: '#f0f0f0' 
              }}></div>
              
              <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                <h3 style={{ margin: '0', color: '#ff6600', fontSize: '1.4rem' }}>{a.nombre}</h3>
                <p style={{ fontWeight: 'bold', color: '#777', marginBottom: '15px' }}>{a.rol}</p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <a href={a.wa} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                    <button style={{ width: '100%', padding: '12px', borderRadius: '10px', border: 'none', background: '#25D366', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}>WhatsApp</button>
                  </a>
                  <a href={a.ig || a.fb} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                    <button style={{ width: '100%', padding: '12px', borderRadius: '10px', border: 'none', background: a.ig ? '#E1306C' : '#3b5998', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}>{a.ig ? 'Instagram' : 'Facebook'}</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER PARA COMERCIANTES */}
      <footer style={{ marginTop: '4rem', textAlign: 'center', padding: '3rem 1rem', background: '#1a1a1a' }}>
        <Link href="/suscripcion">
          <p style={{ color: '#ffcc66', cursor: 'pointer', textDecoration: 'underline', fontSize: '1.1rem', fontWeight: 'bold' }}>
            ¿Tenes un comercio en la chaca? Sumate al proyecto acá
          </p>
        </Link>
        <p style={{ fontSize: '0.8rem', marginTop: '20px', color: '#fff', opacity: '0.7' }}>© 2026 Colores de la Chacarita</p>
      </footer>
    </div>
  );
}
