import Link from "next/link";

export default function Home() {
  return (
    <div style={{ 
      fontFamily: "Arial, sans-serif", 
      textAlign: "center", 
      padding: "50px", 
      background: "linear-gradient(135deg, #ff9a9e, #fad0c4)" 
    }}>
      <h1>🎨 Circuito de Murales – Colores de la Chacarita</h1>
      <p>Explora el arte urbano y la memoria del barrio a través de un mapa interactivo.</p>
      
      <Link href="/mapa">
        <button style={{ 
          marginTop: "20px", 
          padding: "12px 24px", 
          fontSize: "18px", 
          fontWeight: "bold", 
          backgroundColor: "#ff6f61", 
          color: "#fff", 
          border: "none", 
          borderRadius: "8px", 
          cursor: "pointer" 
        }}>
          Ver el mapa de murales
        </button>
      </Link>
    </div>
  );
}
