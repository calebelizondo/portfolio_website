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

  const handleDownloadTranscript = () => {
    const resumePath = "/transcript.pdf";
    const link = document.createElement('a');

    link.href = resumePath;
    link.download = "transcript.pdf";
    link.click();
  }

  return (
    <>
      <div id="resume-content" className='silver section-container'>
          <h2 className="subsection-title">&mdash; Education &mdash;</h2>
              <div className='flex-row-div'>
                <img src="/tamu.png" alt="Texas A&M logo" id="tamu-logo" />
                  <div style= {{ paddingLeft: '30px', paddingRight: '30px'}}>
                  <i>Texas A&M University </i> <br></br>
                    Bachelor of Science in Computer Science <br></br>
                    Emphasis in Data Science <br />
                    Fall 2021 - Spring 2025 <br></br>
                    GPA:  3.68
                  </div>
                  <img src="https://assets-global.website-files.com/6310b4308e12aa485b047626/63308abc42bc6a2ca8353b29_midway-blue-bg-256x256.png" alt="Midway high logo" id="midway-logo" />
                  <div style= {{ paddingLeft: '30px'}}>
                    <i>Midway High </i> <br/>
                    Fall 2018 - Spring 2021 <br></br>
                    GPA:  3.92
                  </div>
              </div>

          <h2 className="subsection-title">&mdash; Experience &mdash;</h2>
            <a href="https://csweb.rice.edu/academics/undergraduate-programs/opportunities/reu-data-science">
              <div className="flex-row-div">
                <img src="https://www.rice.edu/sites/g/files/bxs2566/files/2019-08/Rice_University_Horizontal_Blue.svg" alt="Rice University logo" />
                <p>
                  <i>Data Science Researcher</i>
                  <br />
                    Participated in REU program funded by Google in collaboration with A&M and Rice.
                </p>
              </div>

            </a>

            <a href="https://thebatt.com">
              <div className="flex-row-div">
                <img style={{ width: "60%", height: "20%"}} src="https://thebatt.com/wp-content/uploads/2024/01/Untitled-1-1.png" alt="The Battalion logo" />
                <p style={{width: '40%'}}>
                  <i>Managing Editor</i><br />
                  Manage editorial staff for Texas A&M's independent student newspaper.
                </p>            
              </div>
            </a>
        <div style={{ paddingTop: '20px'}}>
          <button id="download-resume-button" onClick={handleDownload}>Download Full Resume</button>
          <button id="download-transcript-button" onClick={handleDownloadTranscript}>Download Transcript</button>
        </div>
      </div>
    </>
  );
};

export default Resume;