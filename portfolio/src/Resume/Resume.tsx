import React from 'react';
import Logo from './customLogo'; // Import your Logo component

const Resume: React.FC = () => {
  return (
    <>
      <div className='silver section-container'>
        <h1 className="section-title">Resume</h1>
        <h2 className="subsection-title">Frameworks</h2>
        <div className="logo-container-large">            
          <Logo source="django.png" alt="django logo" />
          <Logo source="logo512.png" alt="react logo" />
          <Logo source="postgres.png" alt="postgresql logo" />
        </div>
        <hr className="my-5" /> 
        <h2 className="subsection-title">Languages</h2>
        <div className='logo-container-large'>
          <Logo source="python-logo.png" alt="python logo" />
        </div>

        <a href="resume.pdf" className="download-link"><h2>Download full resume</h2></a>
      </div>
    </>
  );
};

export default Resume;