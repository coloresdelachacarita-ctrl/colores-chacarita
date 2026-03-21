import Link from "next/link";

export default function Home() {
  // Datos de los Anfitriones (Aquí puedes cambiar los links de las fotos luego)
  const anfitriones = [
    {
      nombre: "Gonzalo Galeano",
      rol: "Mediador Cultural",
      descripcion: "Especialista en gestión comunitaria y relatos de transformación social.",
      fotoUrl: "https://via.placeholder.com/300x200.png?text=Foto+Gonzalo" // Reemplazar por link real
    },
    {
      nombre: "Jose Luis Molas",
      rol: "Guía de Patrimonio",
      descripcion: "Conocedor de la historia profunda y la identidad viva del barrio.",
      fotoUrl: "https://via.placeholder.com/300x200.png?text=Foto+Jose+Luis" // Reemplazar por link real
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

      {/* SECCIÓN DE ANFITRIONES (Reemplaza la antigua Galería) */}
      <section style={{ padding: "3rem 1rem", textAlign: "center" }}>
        <h2 style={{ marginBottom: "2rem", color: "#d35400" }}>👥 Anfitriones Turísticos del Barrio</h2>
        
        <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap" }}>
          {anfitriones.map((anfitrion, index) => (
            <div key={index} style={{ width: "320px", background: "#fff", borderRadius: "15px", overflow: "hidden", boxShadow: "0 6px 15px rgba(0,0,0,0.1)", border: "1px solid #eee" }}>
              {/* Espacio para la foto del anfitrión */}
              <div style={{ height: "220px", backgroundImage: `url(${anfitrion.fotoUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
              
              <div style={{ padding: "1.5rem", textAlign: "left" }}>
                <h3 style={{ margin: "0 0 5px 0", color: "#ff6600" }}>{anfitrion.nombre}</h3>
                <p style={{ margin: "0 0 10px 0", fontWeight: "bold", color: "#555", fontSize: "0.9rem" }}>{anfitrion.rol}</p>
                <p style={{ margin: "0", fontSize: "0.9rem", color: "#666", lineHeight: "1.4" }}>{anfitrion.descripcion}</p>
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
