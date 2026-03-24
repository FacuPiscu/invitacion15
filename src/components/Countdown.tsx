import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const targetDate = new Date('2026-04-10T21:30:00').getTime();

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({ dias: 0, horas: 0, minutos: 0, segundos: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        dias: Math.floor(distance / (1000 * 60 * 60 * 24)),
        horas: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutos: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        segundos: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section bg-card" style={{ backgroundColor: 'var(--bg-card)', padding: '4rem 2rem' }}>
      <p className="font-dancing text-gold" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Ya falta poco...</p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}
      >
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '60px' }}>
            <span className="font-numbers text-gold" style={{ fontSize: '3.5rem', lineHeight: '1' }}>
              {value.toString().padStart(2, '0')}
            </span>
            <span className="font-seasons" style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
              {unit}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};
