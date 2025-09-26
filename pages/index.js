import Link from "next/link";

export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#fefaf6", minHeight: "100vh" }}>
      {/* Encabezado */}
      <header style={{ textAlign: "center", padding: "2rem", background: "#ffdd99" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem", color: "#333" }}>
          🎨 Circuito de Murales – Colores de la Chacarita
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#555" }}>
          Un recorrido artístico, turístico y comunitario por el corazón de Asunción
        </p>
        <Link href="/mapa">
          <button style={{ marginTop: "1rem", padding: "0.7rem 1.5rem", fontSize: "1rem", borderRadius: "8px", border: "none", background: "#ff6600", color: "#fff", cursor: "pointer" }}>
            🗺 Ir al mapa
          </button>
        </Link>
      </header>

      {/* Sección Anfitriones */}
      <section style={{ padding: "2rem" }}>
        <h2>👥 Nuestros Anfitriones Turísticos</h2>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1rem" }}>
          <div style={{ flex: "1", minWidth: "250px", padding: "1rem", border: "1px solid #ccc", borderRadius: "8px" }}>
            <h3>🌟 Juana López</h3>
            <p><strong>Especialidad:</strong> Ruta de la Guarania</p>
            <p>Juana te guía por los murales inspirados en José Asunción Flores y la música paraguaya.</p>
          </div>
          <div style={{ flex: "1", minWidth: "250px", padding: "1rem", border: "1px solid #ccc", borderRadius: "8px" }}>
            <h3>🌟 Carlos Gómez</h3>
            <p><strong>Especialidad:</strong> Ruta del Río</p>
            <p>Carlos te lleva por los murales cercanos al río Paraguay con historias del puerto.</p>
          </div>
          <div style={{ flex: "1", minWidth: "250px", padding: "1rem", border: "1px solid #ccc", borderRadius: "8px" }}>
            <h3>🌟 María Fernández</h3>
            <p><strong>Especialidad:</strong> Ruta Gastronómica</p>
            <p>María combina murales con paradas en comedores populares para degustar chipas y sopa paraguaya.</p>
          </div>
        </div>
      </section>

      {/* Secciones extra */}
      <section style={{ padding: "2rem", background: "#f4f4f4" }}>
        <h2>🛍 Merchandising</h2>
        <p>Remeras, tazas y pósters con diseños de los murales para apoyar al proyecto.</p>
      </section>

      <section style={{ padding: "2rem" }}>
        <h2>🍲 Gastronomía</h2>
        <p>Sabores típicos de la Chacarita: mbeju, chipa guazú, sopa paraguaya y mucho más.</p>
      </section>

      <section style={{ padding: "2rem", background: "#f4f4f4" }}>
        <h2>📖 Historia</h2>
        <p>Historias de resistencia, solidaridad y cultura viva del barrio.</p>
      </section>

      <section style={{ padding: "2rem" }}>
        <h2>🏛 Arquitectura</h2>
        <p>Casas antiguas, patrimonio histórico y la identidad visual de la Chacarita.</p>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "1rem", marginTop: "2rem", background: "#222", color: "#fff" }}>
        <p>© 2025 Colores de la Chacarita – Arte Público y Turismo Comunitario</p>
      </footer>
    </div>
  );
}
