import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Music } from 'lucide-react';

export const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section style={{ backgroundColor: 'var(--bg-dark)', padding: '2rem 1rem', display: 'flex', justifyContent: 'center' }}>
      <audio ref={audioRef} loop src="/cancion.mp3" />
      
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileTap={{ scale: 0.95 }}
        onClick={togglePlay}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.2rem',
          backgroundColor: 'var(--bg-card)',
          border: '1px solid rgba(217, 183, 121, 0.4)',
          padding: '0.8rem 1.5rem 0.8rem 0.8rem',
          borderRadius: '50px',
          color: 'var(--primary-light)',
          cursor: 'pointer',
          boxShadow: '0 8px 20px rgba(0,0,0,0.4)',
          fontFamily: 'The Seasons, serif',
          fontSize: '1.1rem'
        }}
      >
        <div style={{
          backgroundColor: 'var(--primary)',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#000',
          flexShrink: 0
        }}>
          {isPlaying ? <Pause fill="#000" size={20} /> : <Play fill="#000" size={20} style={{ marginLeft: '3px' }} />}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
          <span style={{ fontWeight: 600, letterSpacing: '0.5px' }}>{isPlaying ? 'Pausar música' : 'Darle play'}</span>
          <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.1rem' }}>
            <Music size={12} color="var(--primary)" /> La elegida por Maia
          </span>
        </div>
      </motion.button>
    </section>
  );
};
