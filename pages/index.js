import Link from "next/link";

export default function Home() {
  const anfitriones = [
    {
      nombre: "Gonzalo Galeano",
      rol: "Mediador Cultural",
      wa: "https://wa.me/595961793791",
      ig: "https://www.instagram.com/gonza8511",
      foto: "/GONZALO,GALEANO.jpg"
    },
    {
      nombre: "Jose Luis Molas",
      rol: "Guía de Patrimonio",
      wa: "https://wa.me/595987418543",
      fb: "https://www.facebook.com/share/1BMUSbvY24/",
      foto: "/Jose,Luis,Molas.png"
    }
  ];

  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif', 
      background: 'linear-gradient(to bottom, #fffdfb 0%, #ffecda 40%, #fbd9b9 100%)', 
      minHeight: '100vh', 
      paddingBottom: '3rem' 
    }}>
      
      {/* ENCABEZADO CON LOGO Y REDES SOCIALES */}
      <header style={{ textAlign: 'center', padding: '0', background: 'transparent' }}>
        <img 
          src="/portada-.arte.png" 
          alt="Colores de la Chacarita" 
          style={{ width: '100%', height: 'auto', display: 'block' }} 
        />
        
        {/* FILA DE REDES SOCIALES DE LA CHACARITA - Justo abajo del logo */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '15px', 
          flexWrap: 'wrap', 
          marginTop: '1.5rem', 
          padding: '0 1rem' 
        }}>
          {/* TikTok */}
          <a href="https://www.tiktok.com/@colores.de.la.cha" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
            <button style={{ 
              padding: '10px 20px', 
              borderRadius: '20px', 
              border: '2px solid #fff', 
              background: 'black', 
              color: '#fff', 
              fontWeight: 'bold', 
              cursor: 'pointer' 
            }}>📱 TikTok</button>
          </a>
          
          {/* Instagram - (Enlace genérico, reemplázalo con el real si lo tienes) */}
          <a href="https://www.instagram.com/coloresdelachacarita" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
            <button style={{ 
              padding: '10px 20px', 
              borderRadius: '20px', 
              border: 'none', 
              background: 'linear-gradient(45deg, #f09433, #bc1888)', 
              color: '#fff', 
              fontWeight: 'bold', 
              cursor: 'pointer' 
            }}>📸 Instagram</button>
          </a>
          
          {/* Facebook - (Enlace genérico, reemplázalo con el real si lo tienes) */}
          <a href="https://www.facebook.com/coloresdelachacarita" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
            <button style={{ 
              padding: '10px 20px', 
              borderRadius: '20px', 
              border: 'none', 
              background: '#3b5998', 
              color: '#fff', 
              fontWeight: 'bold', 
              cursor: 'pointer' 
            }}>👤 Facebook</button>
          </a>
        </div>

        <div style={{ padding: '2rem 1rem', display: 'flex', justifyContent: 'center' }}>
