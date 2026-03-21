import Link from "next/link";

export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#fefaf6", minHeight: "100vh", textAlign: "center" }}>
      <header style={{ padding: "3rem", background: "linear-gradient(to bottom, #ffdd99, #ffcc66)" }}>
        <h1>🎨 Colores de la Chacarita</h1>
        <p>Circuito Turístico de Murales y Gastronomía</p>
        <Link href="/mapa">
          <button style={{ padding: "15px 30px", fontSize: "1.2rem", background: "#ff6600", color: "#fff", border: "none", borderRadius: "30px", cursor: "pointer", marginTop: "20px" }}>
            🗺️ Ver el Mapa
          </button>
        </Link>
      </header>

      <section style={{ padding: "2rem" }}>
        <h2>Anfitriones Locales</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
          <div style={{ border: "1px solid #ddd", padding: "1rem", borderRadius: "10px", width: "250px" }}>
            <h3>Gonzalo Galeano</h3>
            <p>Mediador Cultural</p>
          </div>
          <div style={{ border: "1px solid #ddd", padding: "1rem", borderRadius: "10px", width: "250px" }}>
            <h3>Jose Luis Molas</h3>
            <p>Guía de Patrimonio</p>
          </div>
        </div>
      </section>

      <footer style={{ padding: "2rem", background: "#333", color: "#fff" }}>
        <p>© 2026 Colores de la Chacarita</p>
      </footer>
    </div>
  );
}
