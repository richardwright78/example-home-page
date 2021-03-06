/* eslint-disable jsx-a11y/anchor-is-valid */
import './styles/styles.scss';
import { faHome, faLightbulb, faSearchLocation } from '@fortawesome/free-solid-svg-icons';
import { faPagelines } from '@fortawesome/free-brands-svg-icons';
import { SecondaryNavTile } from './components/secondary-nav-tile';
import { LearnMoreTile } from './components/learn-more-tile';

function App() {
  return (
    <>
      <header>
        <div className="hero container">
          <h1 id="main-heading">Empowering local communities</h1>
        </div>
      </header>
      <section className="welcome container">
        <div className="welcome-text">
          Welcome to the rural community council of Essex. We are an independant charity helping people and communities throughout rural Essex build a sustainable future.
        </div>
      </section>
      <nav id="secondary-nav">
        <SecondaryNavTile text="Find a village hall" icon={faSearchLocation} />
        <SecondaryNavTile text="Affordable housing" icon={faHome} />
        <SecondaryNavTile text="Energy and fuel" icon={faLightbulb} />
        <SecondaryNavTile text="Rural partnerships" icon={faPagelines} />
      </nav>
        <section id="learn-more">
          <LearnMoreTile 
            text="RCCE supports ACRE National Village Hall Safeguarding Week" 
            className="acre" 
          />
          <LearnMoreTile 
            text="Have your say on the future of Essex" 
            className="coast" 
          />
          <LearnMoreTile 
            text="Important advice for village hall trustees and managers of community buildings" 
            className="virus" 
          />
          <LearnMoreTile 
            text="Be a part of the National Village Hall Survey" 
            className="survey" 
          />
        </section>
        <section id="work-for-us" className="container">
          <div className="work-for-us-prompt">
            <div>
              <span>Come and work for us</span>
            </div>
            <a href="#">Click here</a>
          </div>
        </section>
    </>
  );
}

export default App;
