import { motion } from 'framer-motion';

export const PhotoSection = () => {
  return (
    <section style={{ position: 'relative', width: '100%', minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      {/* Fotografía de Maia */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url('/images/maia3.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        zIndex: 1
      }} />

      {/* Degradado superior e inferior para fundirse con la web */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to bottom, var(--bg-dark) 0%, rgba(28,23,22,0.1) 30%, rgba(28,23,22,0.1) 70%, var(--bg-dark) 100%)',
        zIndex: 2
      }} />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        style={{ position: 'relative', zIndex: 10, padding: '2rem', textAlign: 'center' }}
      >
        <h2 className="font-pinyon text-gold" style={{ fontSize: '5rem', textShadow: '2px 4px 20px rgba(0,0,0,0.9)' }}>Maia</h2>
      </motion.div>
    </section>
  );
};
