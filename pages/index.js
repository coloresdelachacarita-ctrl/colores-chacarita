import Link from "next/link";

export default function Home() {
  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", background: "#fefaf6", minHeight: "100vh", color: "#333" }}>
      
      {/* Encabezado Principal */}
      <header style={{ 
        textAlign: "center", 
        padding: "4rem 2rem", 
        background: "linear-gradient(135deg, #ffdd99 0%, #ffcc66 100%)",
        borderBottom: "5px solid #ff6600" 
      }}>
        <h1 style={{ fontSize: "2.8rem", marginBottom: "0.5rem" }}>
          🎨 Colores de la Chacarita
        </h1>
        <p style={{ fontSize: "1.3rem", maxWidth: "700px", margin: "0 auto", lineHeight: "1.5" }}>
          Descubre el circuito de murales, historias y sabores guiado por referentes locales.
        </p>
        <div style={{ marginTop: "2rem" }}>
          <Link href="/mapa">
            <button style={{ padding: "1rem 2rem", fontSize: "1.1rem", borderRadius: "30px", border: "none", background: "#ff6600", color: "#fff", cursor: "pointer", fontWeight: "bold", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
              📍 Ir al Mapa de Murales
            </button>
          </Link>
        </div>
      </header>

      {/* Sección de Anfitriones Reales */}
      <section style={{ padding: "3rem 2rem", maxWidth: "1000px", margin: "0 auto" }}>
        <h2 style={{ borderLeft: "6px solid #ff6600", paddingLeft: "15px" }}>👥 Anfitriones del Circuito</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginTop: "2rem" }}>
          
          <div style={{ background: "#fff", padding: "1.5rem", borderRadius: "12px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)", border: "1px solid #eee" }}>
            <h3 style={{ color: "#ff6600", margin: "0 0 10px 0" }}>🌟 Gonzalo Galeano</h3>
            <p style={{ margin: "0", fontWeight: "bold" }}>Mediador Cultural</p>
            <p style={{ fontSize: "0.95rem" }}>Experto en la gestión comunitaria y los relatos de transformación a través del arte.</p>
          </div>

          <div style={{ background: "#fff", padding: "1.5rem", borderRadius: "12px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)", border: "1px solid #eee" }}>
            <h3 style={{ color: "#ff6600", margin: "0 0 10px 0" }}>🌟 Jose Luis Molas</h3>
            <p style={{ margin: "0", fontWeight: "bold" }}>Guía de Patrimonio</p>
            <p style={{ fontSize: "0.95rem" }}>Conocedor de la historia profunda, las anécdotas y la identidad viva del barrio.</p>
          </div>

        </div>
      </section>

      {/* Sección Comercial para Suscripciones */}
      <section style={{ padding: "3rem 2rem", background: "#fdf2e9", textAlign: "center" }}>
        <h2 style={{ color: "#d35400" }}>🍲 Sabores y Comercio Local</h2>
        <p style={{ maxWidth: "600px", margin: "0 auto" }}>Visibilizamos los emprendimientos de la zona para fortalecer nuestra comunidad.</p>
        <div style={{ marginTop: "1.5rem", padding: "1.5rem", background: "#fff
