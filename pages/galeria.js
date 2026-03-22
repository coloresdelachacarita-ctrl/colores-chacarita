import Link from "next/link";

export default function Galeria() {
  // Aquí podés ir agregando los nombres de las fotos que subas a la carpeta public
  const fotosMurales = [
    { url: "/1774139141438.jpeg", titulo: "Mural de Bienvenida" },
    { url: "/portada-.arte.png", titulo: "Esencia de la Chaca" },
    // Agregá más aquí siguiendo el mismo formato: { url: "/nombre.jpg", titulo: "nombre" }
  ];

  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif', 
      background: 'linear-gradient(to bottom, #fffdfb, #fbd9b9)', 
      minHeight: '100vh', 
      padding: '1.5rem' 
    }}>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Link href="/">
          <button style={{ background: 'none', border: 'none', color: '#ff6600', fontWeight: 'bold', cursor: 'pointer' }}>
            ← Volver al Inicio
          </button>
        </Link>
        <h1 style={{ color: '#d35400', marginTop: '1rem' }}>Galería de Murales</h1>
        <p style={{ color: '#666' }}>Un vistazo al museo a cielo abierto más grande de Asunción.</p>
      </header>

      {/* GRILLA DE FOTOS */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', 
        gap: '15px' 
      }}>
        {fotosMurales.map((foto, index) => (
          <div key={index} style={{ 
            borderRadius: '15px', 
            overflow: 'hidden', 
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            background: '#fff'
          }}>
            <img 
              src={foto.url} 
              alt={foto.titulo} 
              style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
            />
            <div style={{ padding: '8px', textAlign: 'center', fontSize: '0.8rem', color: '#ff6600', fontWeight: 'bold' }}>
              {foto.titulo}
            </div>
          </div>
        ))}
      </div>

      <footer style={{ marginTop: '3rem', textAlign: 'center', opacity: '0.6', fontSize: '0.8rem' }}>
        © 2026 Colores de la Chacarita
      </footer>
    </div>
  );
}
