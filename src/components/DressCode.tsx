import { motion } from 'framer-motion';
import { Shirt } from 'lucide-react';

export const DressCode = () => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-dark)' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        style={{ width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Shirt className="text-gold" size={48} style={{ margin: '0 auto 1.5rem auto' }} />
        <h2 className="font-pinyon text-gold" style={{ fontSize: '4rem', marginBottom: '1rem', textShadow: '2px 2px 8px rgba(0,0,0,0.6)' }}>Dress Code</h2>
        
        <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid rgba(217, 183, 121, 0.3)', padding: '2rem', borderRadius: '15px', boxShadow: '0 8px 25px rgba(0,0,0,0.4)', width: '100%', textAlign: 'center' }}>
          <h3 className="font-dancing" style={{ fontSize: '2.5rem', color: 'var(--primary-light)', marginBottom: '0.5rem' }}>Elegante Sport</h3>
          
          <p className="font-seasons" style={{ color: 'var(--text-muted)', marginTop: '1.5rem', fontSize: '1.4rem', lineHeight: '1.5' }}>
            Por favor, tené en cuenta que el<br/>
            <strong style={{ color: 'var(--text-main)', fontWeight: '600' }}>Color Reservado</strong><br/>
            para la cumpleañera es el<br/>
            <span className="font-dancing text-gold" style={{ fontSize: '2.5rem', display: 'block', marginTop: '0.5rem' }}>Champagne</span>
          </p>
        </div>
      </motion.div>
    </section>
  );
};
