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
    <div style={{ 
      fontFamily: 'Arial, sans-serif', 
      background: 'linear-gradient(to bottom, #fffdfb 0%, #ffecda 40%, #fbd9b9 100%)', 
      minHeight: '100vh', 
      paddingBottom: '3rem' 
    }}>
      
      {/* ENCABEZADO CON LOGO Y REDES SOCIALES UNIFICADAS */}
      <header style={{ textAlign: 'center', padding: '0', background: 'transparent' }}>
        <img 
          src="/portada-.arte.png" 
          alt="Colores de la Chacarita" 
          style={{ width: '100%', height: 'auto', display: 'block' }} 
        />
        
        {/* FILA DE REDES SOCIALES DE LA CHACARITA - Justo abajo del logo */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '12px', // Un poco más apretado para que quepan los 4
          flexWrap: 'wrap', 
          marginTop: '1.5rem', 
          padding: '0 1rem' 
        }}>
          {/* TikTok */}
          <a href="https://www.tiktok.com/@colores.de.la.cha" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
            <button style={{ 
              padding: '10px 18px', 
              borderRadius: '20px', 
              border: '2px solid #fff', 
              background: 'black', 
              color: '#fff', 
              fontWeight: 'bold', 
              cursor: 'pointer' 
            }}>📱 TikTok</button>
          </a>

          {/* YouTube - (NUEVO) */}
          <a href="https://www.youtube.com/@coloresdelachacarita" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
            <button style={{ 
              padding: '10px 18px', 
              borderRadius: '20px', 
              border: 'none', 
              background: '#FF0000', // Rojo YouTube
              color: '#fff', 
              fontWeight: 'bold', 
              cursor: 'pointer' 
            }}>▶️ YouTube</button>
          </a>
          
          {/* Instagram - (Enlace genérico, reemplázalo con el real si lo tienes) */}
          <a href="https://www.instagram.com/coloresdelachacarita" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
            <button style={{ 
              padding: '10px 18px', 
              borderRadius: '20px', 
              border: 'none', 
              background: 'linear-gradient(45deg, #f09433, #bc1888)', 
              color: '#fff', 
              fontWeight: 'bold', 
              cursor: 'pointer' 
            }}>📸 Instagram</button>
          </a>
          
          {/* Facebook - (Enlace genérico, reemplázalo con el real si lo tienes) */}
          <a href="https://www.facebook.com/coloresdelachacarita" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
            <button style={{ 
              padding: '10px 18px', 
              borderRadius: '20px', 
              border: 'none', 
              background: '#3b5998', 
              color: '#fff', 
              fontWeight: 'bold', 
              cursor: 'pointer' 
            }}>👤 Facebook</button>
          </a>
        </div>

        <div style={{ padding: '2.5rem 1rem', display: 'flex', justifyContent: 'center' }}>
          <Link href="/mapa">
            <button style={{ padding: '12px 30px', borderRadius: '30px', border: 'none', background: '#ff6600', color: '#fff', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}>
              📍 Ver Mapa de Murales
            </button>
          </Link>
        </div>
      </header>

      {/* ANFITRIONES */}
      <section style={{ padding: '1rem', maxWidth: '500px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', color: '#d35400', marginBottom: '2rem' }}>👥 Anfitriones del Barrio</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center' }}>
          {anfitriones.map((a, i) => (
            <div key={i} style={{ 
              width: '100%', 
              background: '#fff', 
              borderRadius: '20px', 
              boxShadow: '0 8px 25px rgba(0,0,0,0.15)', 
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
            ¿Tenes un comercio en la Chaca? Sumate al proyecto acá
          </p>
        </Link>
        <p style={{ fontSize: '0.8rem', marginTop: '20px', color: '#fff', opacity: '0.7' }}>© 2026 Colores de la Chacarita</p>
      </footer>
    </div>
  );
}
