import React from 'react';
import Logo from './customLogo'; // Import your Logo component

const Resume: React.FC = () => {
  return (
    <>
      <div className='silver section-container'>
        <h1 className="section-title">Resume</h1>
        <div className="resume-text-container">
          <h2 className="subsection-title">Education</h2>
          <h2 className="subsection-title">Experience</h2>
          <h2 className="subsection-title">Skills</h2>
        </div>
      </div>
    </>
  );
};

export default Resume;