import Link from "next/link";

export default function Home() {
  // Datos de los Anfitriones Actualizados con Contactos Reales
  const anfitriones = [
    {
      nombre: "Gonzalo Galeano",
      rol: "Mediador Cultural",
      descripcion: "Relatos de transformación y gestión comunitaria en el barrio.",
      whatsapp: "+595961793791",
      waLink: "https://wa.me/595961793791?text=Hola%20Gonzalo!%20Quiero%20conocer%20Colores%20de%20la%20Chacarita",
      redSocial: "https://www.instagram.com/gonza8511?igsh=MWJ4NTc5dmbzRibQ==",
      redTexto: "Instagram",
      fotoUrl: "https://github.com/murales-chacarita/colores-nextjs-chacarita/raw/main/public/anfitrion1.png" // Reemplazar con link de la foto subida
    },
    {
      nombre: "Jose Luis Molas",
      rol: "Guía de Patrimonio",
      descripcion: "Historia profunda y la identidad viva del barrio Chacarita.",
      whatsapp: "+595987418543",
      waLink: "https://wa.me/595987418543?text=Hola%20Jose%20Luis!%20Quiero%20conocer%20Colores%20de%20la%20Chacarita",
      redSocial: "https://www.facebook.com/share/1BMUSbvY24/",
      redTexto: "Facebook",
      fotoUrl: "https://github.com/murales-chacarita/colores-nextjs-chacarita/raw/main/public/anfitrion2.png" // Reemplazar con link de la foto subida
    }
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#fefaf6", minHeight: "100vh", color: "#333" }}>
      
      {/* Encabezado Principal */}
      <header style={{ textAlign: "center", padding: "4rem 2rem", background: "linear-gradient(135deg, #ffdd99 0%, #ffcc66 100%)", borderBottom: "5px solid #ff6600" }}>
        <h1 style={{ fontSize: "2.8rem", marginBottom: "0.5rem" }}>🎨 Colores de la Chacarita</h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto" }}>Un recorrido artístico y comunitario por el corazón de Asunción.</p>
        <div style={{ marginTop: "2rem" }}>
          <Link href="/mapa">
            <button style={{ padding: "1rem 2rem", fontSize: "1.1rem", borderRadius: "30px", border: "none", background: "#ff6600", color: "#fff", cursor: "pointer", fontWeight: "bold", boxShadow: "0 4px 10px rgba(0,0,0,0.2)" }}>
              📍 Ir al Mapa de Murales
            </button>
          </Link>
        </div>
      </header>

      {/* SECCIÓN DE ANFITRIONES: Una al lado de la otra */}
      <section style={{ padding: "3rem 1rem", textAlign: "center" }}>
        <h2 style={{ marginBottom: "2rem", color: "#d35400" }}>👥 Anfitriones Turísticos del Barrio</h2>
        
        <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap" }}>
          {anfitriones.map((anfitrion, index) => (
            <div key={index} style={{ width: "320px", background: "#fff", borderRadius: "15px", overflow: "hidden", boxShadow: "0 6px 15px rgba(0,0,0,0.1)", border: "1px solid #eee", textAlign: "left" }}>
              {/* Espacio para la foto de perfil del anfitrión */}
              <div style={{ height: "250px", backgroundImage: `url(${anfitrion.fotoUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
              
              <div style={{ padding: "1.5rem" }}>
                <h3 style={{ margin: "0 0 5px 0", color: "#ff6600" }}>{anfitrion.nombre}</h3>
                <p style={{ margin: "0 0 10px 0", fontWeight: "bold", color: "#555", fontSize: "0.9rem" }}>{anfitrion.rol}</p>
                <p style={{ margin: "0 0 20px 0", fontSize: "0.9rem", color: "#666", lineHeight: "1.4", minHeight: "40px" }}>{anfitrion.descripcion}</p>
                
                {/* Botones de Contacto Directo */}
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <a href={anfitrion.waLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                    <button style={{ width: "100%", padding: "10px", background: "#25D366", color: "#fff", border: "none", borderRadius: "8px", fontWeight: "bold", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                      📞 WhatsApp
                    </button>
                  </a>
                  <a href={anfitrion.redSocial} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                    <button style={{ width: "100%", padding: "10px", background: anfitrion.redTexto === 'Instagram' ? "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)" : "#3b5998", color: "#fff", border: "none", borderRadius: "8px", fontWeight: "bold", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                      🌐 {anfitrion.redTexto}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sección de Socios Locales (Abajo, separada) */}
      <section style={{ padding: "3rem 2rem", background: "#fdf2e9", textAlign: "center", marginTop: "2rem" }}>
        <div style={{ border: "2px dashed #ffb380", padding: "2rem", borderRadius: "15px", display: "inline-block", maxWidth: "600px", background: "#fff" }}>
          <h2 style={{ color: "#d35400", marginTop: 0 }}>🍲 ¿Tenés un local en el barrio?</h2>
          <p>Sumate como socio para aparecer en el mapa y la señalética del proyecto.</p>
          <Link href="/suscripcion">
            <button style={{ background: "#27ae60", color: "#fff", border: "none", padding: "0.8rem 1.5rem", borderRadius: "8px", fontWeight: "bold", cursor: "pointer", marginTop: "10px" }}>
              Ver Beneficios de Suscripción
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "2rem", background: "#1a1a1a", color: "#fff", marginTop: "3rem" }}>
        <p>© 2026 Colores de la Chacarita – Asunción, Paraguay</p>
      </footer>
    </div>
  );
}
