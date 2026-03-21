import Link from "next/link";

export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#fefaf6", minHeight: "100vh", color: "#333" }}>
      
      {/* Encabezado con Identidad */}
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

      {/* Sección de Anfitriones */}
      <section style={{ padding: "3rem 2rem", maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ marginBottom: "2rem" }}>👥 Nuestros Anfitriones</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
          <div style={{ background: "#fff", padding: "1.5rem", borderRadius: "12px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)", width: "280px" }}>
            <h3 style={{ color: "#ff6600" }}>Gonzalo Galeano</h3>
            <p style={{ fontSize: "0.9rem" }}>Mediador Cultural y relatos de transformación social.</p>
          </div>
          <div style={{ background: "#fff", padding: "1.5rem", borderRadius: "12px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)", width: "280px" }}>
            <h3 style={{ color: "#ff6600" }}>Jose Luis Molas</h3>
            <p style={{ fontSize: "0.9rem" }}>Guía de Patrimonio e identidad viva del barrio.</p>
          </div>
        </div>
      </section>

      {/* NUEVA SECCIÓN: Acceso para Comerciantes */}
      <section style={{ padding: "3rem 2rem", background: "#fdf2e9", textAlign: "center" }}>
        <div style={{ border: "2px dashed #ffb380", padding: "2rem", borderRadius: "15px", display: "inline-block", maxWidth: "600px" }}>
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
      <footer style={{ textAlign: "center", padding: "2rem", background: "#1a1a1a", color: "#fff", marginTop: "2rem" }}>
        <p>© 2026 Colores de la Chacarita – Asunción, Paraguay</p>
      </footer>
    </div>
  );
}
