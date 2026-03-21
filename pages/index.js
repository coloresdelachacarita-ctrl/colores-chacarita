import Link from "next/link";

export default function Home() {
  const anfitriones = [
    {
      nombre: "Gonzalo Galeano",
      rol: "Mediador Cultural",
      descripcion: "Relatos de transformación y gestión comunitaria en el barrio.",
      wa: "https://wa.me/595961793791",
      ig: "https://www.instagram.com/gonza8511?igsh=MWJ4NTc5djdmbzRibQ==",
      foto: "https://raw.githubusercontent.com/coloresdelachacarita-ctrl/colores-chacarita/principal/public/gonzalo.png" // Asegúrate de que el nombre coincida
    },
    {
      nombre: "Jose Luis Molas",
      rol: "Guía de Patrimonio",
      descripcion: "Historia profunda y la identidad viva del barrio Chacarita.",
      wa: "https://wa.me/595987418543",
      fb: "https://www.facebook.com/share/1BMUSbvY24/",
      foto: "https://raw.githubusercontent.com/coloresdelachacarita-ctrl/colores-chacarita/principal/public/joseluis.png"
    }
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', background: '#fefaf6', minHeight: '100vh', paddingBottom: '3rem' }}>
      
      {/* Encabezado */}
      <header style={{ textAlign: 'center', padding: '3rem 1rem', background: 'linear-gradient(to bottom, #ffdd99, #fefaf6)' }}>
        <h1 style={{ fontSize: '2.2rem', color: '#333' }}>🎨 Colores de la Chacarita</h1>
        <p style={{ color: '#666' }}>Arte, Historia y Comunidad</p>
        <Link href="/mapa">
          <button style={{ marginTop: '1rem', padding: '12px 25px', borderRadius: '25px', border: 'none', background: '#ff6600', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}>
            📍 Ir al Mapa de Murales
          </button>
        </Link>
      </header>

      {/* SECCIÓN DE ANFITRIONES - UNO AL LADO DEL OTRO */}
      <section style={{ padding: '1rem' }}>
        <h2 style={{ textAlign: 'center', color: '#d35400', marginBottom: '2rem' }}>👥 Anfitriones del Barrio</h2>
        
        <div style={{ 
          display: 'flex', 
          flexDirection: 'row', // Esta es la clave para que estén al lado
          flexWrap: 'wrap',    // Pero si el celular es muy chico, se acomodan
          justifyContent: 'center', 
          gap: '20px' 
        }}>
          {anfitriones.map((a, i) => (
            <div key={i} style={{ 
              width: '340px', 
              background: '#fff', 
              borderRadius: '20px', 
              boxShadow: '0 10px 20px rgba(0,0,0,0.1)', 
              overflow: 'hidden',
              border: '1px solid #eee'
            }}>
              {/* Foto de Perfil */}
              <div style={{ 
                height: '380px', 
                backgroundImage: `url(${a.foto})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                backgroundColor: '#eee' 
              }}></div>
              
              <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                <h3 style={{ margin: '0', color: '#ff6600' }}>{a.nombre}</h3>
                <p style={{ fontWeight: 'bold', color: '#777', marginTop: '5px' }}>{a.rol}</p>
                <p style={{ fontSize: '0.9rem', color: '#666', height: '50px' }}>{a.descripcion}</p>
                
                {/* Botones Sociales */}
                <div style={{ marginTop: '15px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <a href={a.wa} target="_blank" style={{ textDecoration: 'none' }}>
                    <button style={{ width: '100%', padding: '10px', borderRadius: '10px', border: 'none', background: '#25D366', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}>
                      WhatsApp
                    </button>
                  </a>
                  <a href={a.ig || a.fb} target="_blank" style={{ textDecoration: 'none' }}>
                    <button style={{ 
                      width: '100%', 
                      padding: '10px', 
                      borderRadius: '10px', 
                      border: 'none', 
                      background: a.ig ? 'linear-gradient(45deg, #f09433, #bc1888)' : '#3b5998', 
                      color: '#fff', 
                      fontWeight: 'bold', 
                      cursor: 'pointer' 
                    }}>
                      {a.ig ? 'Instagram' : 'Facebook'}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Botón de Suscripción al final */}
      <footer style={{ marginTop: '3rem', textAlign: 'center' }}>
        <Link href="/suscripcion">
          <p style={{ color: '#ff6600', textDecoration: 'underline', cursor: 'pointer' }}>¿Tenés un local? Sumate aquí</p>
        </Link>
      </footer>
    </div>
  );
}
