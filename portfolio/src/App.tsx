import Home from './Home/Home';
import Resume from './Resume/Resume';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Navbar from './Home/Navbar';

function App() {
  return (
    <div className='app-container'>
      <Navbar />
      <div className="resume-container">
        <Resume />
      </div>
      <div className="projects-container">
        <Projects />
      </div>
      <div className="contact-container">
        <Contact />
      </div>
    </div>
  );
}

export default App;