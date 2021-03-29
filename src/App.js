import './App.scss';
import { faHome, faLightbulb, faSearchLocation } from '@fortawesome/free-solid-svg-icons';
import { faPagelines } from '@fortawesome/free-brands-svg-icons';
import { SecondaryNavTile } from './components/secondary-nav-tile';


function App() {
  return (
    <>
      <header id="header">
        <nav id="main-nav" className="container">
          <span id="logo">RCCE</span>
        </nav>
      </header>
      <div className="hero container">
        <h1 id="main-heading">Empowering local communities</h1>
      </div>
      <section className="welcome container">
        Welcome to the rural community council of Essex. We are an independant charity helping people and communities throughout rural Essex build a sustainable future.
      </section>
      <nav className="" id="secondary-nav">
        <SecondaryNavTile text="Find a village hall" icon={faSearchLocation} />
        <SecondaryNavTile text="Affordable housing" icon={faHome} />
        <SecondaryNavTile text="Energy and fuel" icon={faLightbulb} />
        <SecondaryNavTile text="Rural partnerships" icon={faPagelines} />
      </nav>
    </>
  );
}

export default App;
