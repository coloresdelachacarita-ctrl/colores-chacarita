import Link from "next/link";

export default function Home() {
  const muralesDestacados = [
    { 
      nombre: "Galoperas ", 
      autor: "lidia", 
      urlFoto: "https://lh5.googleusercontent.com/p/AF1QipN..." //https://maps.app.goo.gl/TMsW5op1zLgi9Mvu8   },
    { 
      nombre: "Mural Juan Cáceres y Renate Howell", 
      autor: "Juan Cáceres & Renate Howell", 
      urlFoto: "https://lh5.googleusercontent.com/p/AF1QipO..." // Aquí pegas el otro link
    }
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#fefaf6", minHeight: "100vh", color: "#333" }}>
      
      <header style={{ textAlign: "center", padding: "4rem 2rem", background: "linear-gradient(135deg, #ffdd99 0%, #ffcc66 100%)", borderBottom: "5px solid #ff6600" }}>
        <h1 style={{ fontSize: "2.8rem" }}>🎨 Colores de la Chacarita</h1>
        <p>Arte, Historia y Comunidad en cada rincón.</p>
        <Link href="/mapa">
          <button style={{ padding: "1rem 2rem", borderRadius: "30px", background: "#ff6600", color: "#fff", border: "none", cursor: "pointer", fontWeight: "bold", marginTop: "1rem" }}>
            📍 Ver Mapa Interactivo
          </button>
        </Link>
      </header>

      {/* GALERÍA DE MURALES */}
      <section style={{ padding: "3rem 1rem", textAlign: "center" }}>
        <h2>🖼️ Galería del Circuito</h2>
        <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap", marginTop: "2rem" }}>
          {muralesDestacados.map((mural, index) => (
            <div key={index} style={{ width: "300px", background: "#fff", borderRadius: "15px", overflow: "hidden", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
              {/* Espacio para la foto */}
              <div style={{ height: "200px", background: "#ddd", backgroundImage: `url(${mural.urlFoto})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
              <div style={{ padding: "1rem" }}>
                <h4 style={{ margin: "0" }}>{mural.nombre}</h4>
                <p style={{ fontSize: "0.8rem", color: "#666" }}>Por: {mural.autor}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "3rem 2rem", background: "#fdf2e9", textAlign: "center" }}>
        <div style={{ border: "2px dashed #ffb380", padding: "2rem", borderRadius: "15px", display: "inline-block", maxWidth: "600px" }}>
          <h2 style={{ color: "#d35400" }}>🍲 ¿Tenés un local en el barrio?</h2>
          <p>Sumate como socio para aparecer en el mapa.</p>
          <Link href="/suscripcion">
            <button style={{ background: "#27ae60", color: "#fff", padding: "0.8rem 1.5rem", borderRadius: "8px", border: "none", cursor: "pointer", fontWeight: "bold" }}>
              Ver Beneficios de Suscripción
            </button>
          </Link>
        </div>
      </section>

      <footer style={{ textAlign: "center", padding: "2rem", background: "#1a1a1a", color: "#fff" }}>
        <p>© 2026 Colores de la Chacarita – Asunción, Paraguay</p>
      </footer>
    </div>
  );
}
