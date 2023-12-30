import Home from './Home/Home';
import Resume from './Resume/Resume';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import { useSpring, animated } from 'react-spring';
import { useEffect } from 'react';
import './App.css';

function App() {


  const [{offset}, set] = useSpring(() => ({offset: 0})); 
  const calc = (o: number) => `translateY(${o * 0.1}px)`;

  const handleScroll = () => {
    const offset = window.pageYOffset;
    set({offset});
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);


  return (
  <div onScroll={handleScroll} >                                            

    <div className="parent-container">
      <animated.div style={{ zIndex: -1, position: 'absolute', top: 0, width: '100%', height: '100vh', transform: offset.to(calc) }}>
        <div className="background-container">
        </div>
      </animated.div>

      <div className='foreground-container'>
        <Home />
        <div className="resume-container" id="resume">
          <Resume />
        </div>
        <div className="projects-container" id="projects">
          <Projects />
        </div>
        <div className="contact-container" id="contact">
          <Contact />
        </div>
      </div>
    </div>

  </div>
  );
}

export default App;