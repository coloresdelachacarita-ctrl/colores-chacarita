import Link from "next/link";

export default function Suscripcion() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', background: '#fefaf6', minHeight: '100vh', padding: '20px', color: '#333' }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#ff6600' }}>🍲 Sumá tu local a "Colores"</h1>
        <p>Aparecé en el mapa interactivo y la señalética del barrio.</p>
      </header>

      <div style={{ maxWidth: '500px', margin: '0 auto', background: '#fff', padding: '30px', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
        <h3>¿Por qué ser un Socio Local?</h3>
        <ul style={{ textAlign: 'left', fontSize: '0.9rem', lineHeight: '1.6' }}>
          <li>📍 **Pin destacado** en el mapa digital.</li>
          <li>📸 **Fotos de tus platos** o productos.</li>
          <li>📱 **Botón directo** a tu WhatsApp.</li>
          <li>🗺️ **Publicidad** para los turistas que recorren los murales.</li>
        </ul>

        <hr style={{ margin: '20px 0', border: '0.5px solid #eee' }} />

        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>¿Querés registrarte hoy?</p>
        
        {/* Botón que lleva a tu WhatsApp real */}
        <a href="https://wa.me/595981220303?text=Hola!%20Quiero%20sumar%20mi%20local%20a%20Colores%20de%20la%20Chacarita" target="_blank">
          <button style={{ width: '100%', padding: '15px', background: '#25D366', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer' }}>
            📩 Contactar por WhatsApp
          </button>
        </a>

        <Link href="/">
          <p style={{ marginTop: '20px', color: '#666', fontSize: '0.8rem', cursor: 'pointer', textAlign: 'center' }}>
            ⬅ Volver al inicio
          </p>
        </Link>
      </div>
    </div>
  );
}
