import React from 'react';
import Logo from './customLogo'; // Import your Logo component
import "./Resume.css";
const Resume: React.FC = () => {

  const handleDownload = () => {
    const resumePath = "/resume.pdf";
    const link = document.createElement('a');

    link.href = resumePath;
    link.download = "Caleb_Elizondo_Resume.pdf";
    link.click();
  }

  return (
    <>
      <div className='silver section-container'>
        <h1 className="section-title">Resume</h1>
        <div className="resume-text-container">
          <h2 className="subsection-title">Education &mdash;</h2> 
          <h2 className="subsection-title">Experience &mdash;</h2>
          <h2 className="subsection-title">Skills &mdash;</h2>
        </div>

        <button id="download-resume-button" onClick={handleDownload}>Download Full Resume</button>
      </div>
    </>
  );
};

export default Resume;