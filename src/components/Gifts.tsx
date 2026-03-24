import { useState } from 'react';
import { motion } from 'framer-motion';
import { Gift, Copy, Check } from 'lucide-react';

export const Gifts = () => {
  const [copied, setCopied] = useState(false);
  const alias = "ALIAS.DEL.BANCO";

  const handleCopy = () => {
    navigator.clipboard.writeText(alias);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-card)' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        style={{ width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Gift className="text-gold" size={48} style={{ margin: '0 auto 1.5rem auto' }} />
        <h2 className="font-pinyon text-gold" style={{ fontSize: '4rem', marginBottom: '1rem', textShadow: '2px 2px 8px rgba(0,0,0,0.6)' }}>Regalos</h2>
        
        <p className="font-seasons" style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: '1.6', fontSize: '1.3rem' }}>
          El mejor regalo es tu presencia, pero si querés ayudarme con mis sueños, podés hacerlo a través de una transferencia:
        </p>

        <div style={{ backgroundColor: 'var(--bg-dark)', border: '1px solid rgba(217, 183, 121, 0.3)', padding: '2rem', borderRadius: '15px', boxShadow: '0 8px 25px rgba(0,0,0,0.4)', width: '100%' }}>
          <p className="font-dancing" style={{ fontSize: '1.8rem', color: 'var(--primary-light)', marginBottom: '0.5rem' }}>Alias bancario</p>
          <p className="font-seasons" style={{ fontSize: '1.5rem', fontWeight: '600', letterSpacing: '1px', color: 'var(--text-main)' }}>{alias}</p>
          
          <button 
            onClick={handleCopy}
            className="btn-gold"
            style={{ 
              marginTop: '1.5rem', 
              width: '100%', 
              backgroundColor: copied ? '#4ade80' : '', 
              color: '#000', 
              fontSize: '1.2rem'
            }}
          >
            {copied ? <Check size={20} color="#000" /> : <Copy size={20} color="#000" />}
            {copied ? '¡Copiado!' : 'Copiar Alias'}
          </button>
        </div>
      </motion.div>
    </section>
  );
};
