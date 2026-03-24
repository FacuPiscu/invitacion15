import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock } from 'lucide-react';

export const Location = () => {
  const openMap = () => window.open('https://www.google.com/maps/place/Av.+Manuel+Garc%C3%ADa+Fernandez+255,+T4168+Bella+Vista,+Tucum%C3%A1n/@-27.0318457,-65.3074731,17z/data=!3m1!4b1!4m6!3m5!1s0x94224f91f8aabcf7:0xa3906f546da481a!8m2!3d-27.0318505!4d-65.3048982!16s%2Fg%2F11l2btd765?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D', '_blank');

  return (
    <section className="section" style={{ padding: 0, minHeight: '100vh', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
      {/* Background Image */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, width: '100%', height: '100%',
        backgroundImage: `url('/images/maia1.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
        zIndex: 1
      }} />
      
      {/* Gradient Overlay for Text Legibility and blending into next section */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, width: '100%', height: '100%',
        background: 'linear-gradient(to bottom, rgba(28,23,22,0.2) 0%, rgba(28,23,22,0.8) 70%, var(--bg-dark) 100%)',
        zIndex: 2
      }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '2rem', padding: '0 2rem', position: 'relative', zIndex: 10 }}
      >
        <h2 className="font-pinyon text-gold" style={{ fontSize: '4rem', textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>Cuándo y Dónde</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', backgroundColor: 'var(--bg-card)', padding: '2.5rem 2rem', borderRadius: '15px', border: '1px solid rgba(217, 183, 121, 0.2)', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', textAlign: 'left' }}>
            <Calendar className="text-gold" size={32} />
            <div>
              <h3 className="font-dancing" style={{ fontSize: '1.8rem', marginBottom: '0.2rem', color: 'var(--primary-light)' }}>Fecha del Evento</h3>
              <p className="font-seasons" style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>Viernes, 10 de Abril</p>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', textAlign: 'left' }}>
            <Clock className="text-gold" size={32} />
            <div>
              <h3 className="font-dancing" style={{ fontSize: '1.8rem', marginBottom: '0.2rem', color: 'var(--primary-light)' }}>Horario</h3>
              <p className="font-seasons" style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>21:30 hs</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', textAlign: 'left' }}>
            <MapPin className="text-gold" size={32} />
            <div>
              <h3 className="font-dancing" style={{ fontSize: '1.8rem', marginBottom: '0.2rem', color: 'var(--primary-light)' }}>Salón el Cuadro</h3>
              <p className="font-seasons" style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>Av. Manuel García Fernández 255<br/>Bella Vista, Tucumán</p>
            </div>
          </div>
          
          <button onClick={openMap} className="btn-gold" style={{ marginTop: '1rem', fontSize: '1.2rem' }}>
            <MapPin size={20} color="#000" />
            Ver en el Mapa
          </button>
        </div>
      </motion.div>
    </section>
  );
};
