import Link from "next/link";

export default function Home() {
  const anfitriones = [
    {
      nombre: "Gonzalo Galeano",
      rol: "Mediador Cultural",
      wa: "https://wa.me/595961793791",
      ig: "https://www.instagram.com/gonza8511",
      foto: "/GONZALO,GALEANO.jpg" // Nombre exacto de tu archivo subido
    },
    {
      nombre: "Jose Luis Molas",
      rol: "Guía de Patrimonio",
      wa: "https://wa.me/595987418543",
      fb: "https://www.facebook.com/share/1BMUSbvY24/",
      foto: "/Jose,Luis,Molas.png" // Nombre exacto de tu archivo subido
    }
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', background: '#fefaf6', minHeight: '100vh' }}>
      
      <header style={{ textAlign: 'center', padding: '3rem 1rem', background: 'linear-gradient(to bottom, #ffdd99, #fefaf6)' }}>
        <h1 style={{ fontSize: '2.5rem', margin: '0' }}>🎨 Colores de la Chacarita</h1>
        <p style={{ color: '#666', marginTop: '10px' }}>Arte, Historia y Comunidad viva</p>
        <Link href="/mapa">
          <button style={{ marginTop: '1.5rem', padding: '12px 30px', borderRadius: '30px', border: 'none', background: '#ff6600', color: '#fff', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}>
            📍 Ver Mapa de Murales
          </button>
        </Link>
      </header>

      <section style={{ padding: '1rem', maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', color: '#d35400', marginBottom: '2rem' }}>👥 Anfitriones del Barrio</h2>
        
        {/* CONTENEDOR FLEX INTELIGENTE (RESPONSIVO) */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '20px', 
          flexDirection: 'row', // Fila por defecto
          flexWrap: 'wrap',     // SALTA DE LÍNEA SI NO CABE (ESTO LO HACE RESPONSIVO)
          paddingBottom: '20px'
        }}>
          {anfitriones.map((a, i) => (
            <div key={i} style={{ 
              minWidth: '280px', // Ancho mínimo para que la foto no se corte
              maxWidth: '340px', // Ancho máximo para que no se vea gigante
              width: '100%',      // Ocupa todo el espacio que pueda hasta el max
              background: '#fff', 
              borderRadius: '20px', 
              boxShadow: '0 8px 20px rgba(0,0,0,0.1)', 
              overflow: 'hidden',
              border: '2px solid #ffcc66'
            }}>
              {/* Foto de Perfil */}
              <div style={{ 
                height: '350px', 
                backgroundImage: `url(${a.foto})`, 
                backgroundSize: 'cover', // La foto llena el espacio sin cortarse feo
                backgroundPosition: 'center', // Centra la cara si la foto es ancha
                backgroundColor: '#f0f0f0' 
              }}></div>
              
              <div style={{ padding: '1.2rem', textAlign: 'center' }}>
                <h3 style={{ margin: '0', color: '#ff6600', fontSize: '1.2rem' }}>{a.nombre}</h3>
                <p style={{ fontWeight: 'bold', color: '#777', fontSize: '0.8rem', marginBottom: '15px' }}>{a.rol}</p>
                
                {/* Botones Sociales */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a href={a.wa} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                    <button style={{ width: '100%', padding: '10px', borderRadius: '10px', border: 'none', background: '#25D366', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}>WhatsApp</button>
                  </a>
                  <a href={a.ig || a.fb} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                    <button style={{ width: '100%', padding: '10px', borderRadius: '10px', border: 'none', background: a.ig ? '#E1306C' : '#3b5998', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}>{a.ig ? 'Instagram' : 'Facebook'}</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ marginTop: '4rem', textAlign: 'center', padding: '2rem', background: '#333', color: '#fff' }}>
        <Link href="/suscripcion">
          <p style={{ color: '#ffcc66', cursor: 'pointer', textDecoration: 'underline' }}>¿Sos comerciante? Sumate acá</p>
        </Link>
        <p style={{ fontSize: '0.8rem', marginTop: '10px' }}>© 2026 Colores de la Chacarita</p>
      </footer>
    </div>
  );
}
