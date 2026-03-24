import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="section" style={{ minHeight: '100vh', justifyContent: 'center', position: 'relative', overflow: 'hidden', padding: 0 }}>
      {/* Background Image */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, width: '100%', height: '100%',
        backgroundImage: `url('/images/maia2.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 20%',
        zIndex: 1
      }} />
      
      {/* Gradient Overlay for Text Legibility and blending into next section */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, width: '100%', height: '100%',
        background: 'linear-gradient(to bottom, rgba(28,23,22,0.1) 0%, rgba(28,23,22,0.6) 65%, var(--bg-dark) 100%)',
        zIndex: 2
      }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        style={{ zIndex: 10, position: 'relative', marginTop: 'auto', marginBottom: '4rem', padding: '0 2rem', width: '100%' }}
      >
        <h3 className="font-dancing text-gold" style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontWeight: 600, textShadow: '1px 2px 4px rgba(0,0,0,0.6)' }}>
          Mis 15 Años
        </h3>
        <h1 className="font-pinyon text-gold" style={{ fontSize: '7rem', margin: '0', lineHeight: '1.2', textShadow: '2px 4px 10px rgba(0,0,0,0.8)' }}>
          Maia
        </h1>
        <p className="font-seasons" style={{ color: 'var(--text-main)', fontSize: '1.5rem', marginTop: '1rem', textShadow: '1px 1px 5px rgba(0,0,0,0.9)' }}>
          ¡Te invito a celebrar conmigo esta noche mágica!
        </p>
      </motion.div>
    </section>
  );
};
