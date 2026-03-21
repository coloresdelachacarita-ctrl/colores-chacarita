import Link from 'next/link';

export default function Mapa() {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', fontFamily: 'Arial' }}>
      <nav style={{ padding: '10px', background: '#333', display: 'flex', alignItems: 'center', gap: '15px' }}>
        <Link href="/">
          <button style={{ cursor: 'pointer', padding: '5px 15px', background: '#ff6600', color: '#fff', border: 'none', borderRadius: '5px' }}>
            ⬅ Volver
          </button>
        </Link>
        <span style={{ color: '#fff' }}>Circuito Colores de la Chacarita</span>
      </nav>
      
      {/* Mapa Real de tu Perfil de Negocio en Google Maps */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.563032128!2d-57.636!3d-25.282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE2JzU1LjIiUyA1N8KwMzgnMDkuNiJX!5e0!3m2!1ses!2spy!4v1711000000000!5m2!1ses!2spy"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
