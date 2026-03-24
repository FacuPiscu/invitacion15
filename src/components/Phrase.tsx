import { motion } from 'framer-motion';

export const Phrase = () => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-dark)', padding: '4rem 2rem', position: 'relative' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ 
          width: '100%', 
          maxWidth: '500px', 
          border: '1px solid rgba(217, 183, 121, 0.3)', 
          padding: '3rem 2rem', 
          borderRadius: '10px', 
          textAlign: 'center',
          position: 'relative',
          backgroundColor: 'rgba(28, 23, 22, 0.5)'
        }}
      >
        <p className="font-dancing" style={{ 
          color: 'var(--primary-light)', 
          fontSize: '2.2rem', 
          lineHeight: '1.6', 
          textShadow: '1px 1px 4px rgba(0,0,0,0.5)'
        }}>
          "Hay momentos en la vida que solo se comparten con las personas que mas amas, por eso esta noche de mi celebración de 15 años te espero para poder compartir mi mas grande anhelo."
        </p>
      </motion.div>
    </section>
  );
};
