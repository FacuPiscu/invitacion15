import { useState } from 'react';
import { motion } from 'framer-motion';

export const RSVP = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    asistencia: 'si'
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      // Simulate network request
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ width: '100%', maxWidth: '400px' }}
      >
        <h2 className="font-pinyon text-gold" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Asistencia</h2>
        <p className="font-seasons" style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.2rem' }}>Por favor, confirmá tu asistencia antes del 15 de Diciembre.</p>

        {status === 'success' ? (
          <div style={{ padding: '2rem', backgroundColor: 'rgba(74, 222, 128, 0.1)', border: '1px solid #4ade80', borderRadius: '15px' }}>
            <h3 className="font-dancing" style={{ color: '#4ade80', fontSize: '2rem', marginBottom: '0.5rem' }}>¡Gracias por confirmar!</h3>
            <p className="font-seasons" style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>Tu respuesta ha sido guardada.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left' }}>
            <div>
              <label className="font-dancing" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--primary-light)', fontSize: '1.5rem' }}>Nombre y Apellido</label>
              <input 
                type="text" 
                required
                value={formData.nombre}
                onChange={e => setFormData({...formData, nombre: e.target.value})}
                style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(217, 183, 121, 0.3)', backgroundColor: 'var(--bg-card)', color: '#fff', fontSize: '1.1rem' }}
                className="font-seasons"
                placeholder="Ej. Juan Pérez"
              />
            </div>
            
            <div>
              <label className="font-dancing" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--primary-light)', fontSize: '1.5rem' }}>¿Asistís final?</label>
              <select 
                value={formData.asistencia}
                onChange={e => setFormData({...formData, asistencia: e.target.value})}
                className="font-seasons"
                style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(217, 183, 121, 0.3)', backgroundColor: 'var(--bg-card)', color: '#fff', fontSize: '1.1rem', appearance: 'none' }}
              >
                <option value="si">¡Sí, obvio que voy!</option>
                <option value="no">No podré asistir</option>
              </select>
            </div>

            <button type="submit" disabled={status === 'loading'} className="btn-gold" style={{ marginTop: '1rem', padding: '1.2rem', fontSize: '1.3rem' }}>
              {status === 'loading' ? 'Enviando...' : 'Confirmar Asistencia'}
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
};
