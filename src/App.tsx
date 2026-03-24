import { Hero } from './components/Hero';
import { AudioPlayer } from './components/AudioPlayer';
import { Countdown } from './components/Countdown';
import { Phrase } from './components/Phrase';
import { Location } from './components/Location';
import { DressCode } from './components/DressCode';
import { RSVP } from './components/RSVP';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <Hero />
      <AudioPlayer />
      <Countdown />
      <Phrase />
      <Location />
      <DressCode />
      <RSVP />
      
      <footer style={{ padding: '3rem 2rem', textAlign: 'center', borderTop: '1px solid rgba(212, 175, 55, 0.1)', marginTop: '2rem' }}>
        <p className="font-seasons" style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>¡Te espero para compartir una noche inolvidable!</p>
        <p className="font-pinyon text-gold" style={{ fontSize: '3.5rem', margin: '1rem 0' }}>Mis 15 Años</p>
      </footer>
    </div>
  );
}

export default App;
