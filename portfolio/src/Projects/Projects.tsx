import { useEffect } from "react";
import "./Projects.css";

const Projects:React.FC = () => {

  useEffect(() => {
    function resizeIframe(event: MessageEvent) {
      if (event.origin === "https://gradeexplorertamuapp-frontend.onrender.com") {
        const iframe = document.getElementById("grade-dist-iframe") as HTMLIFrameElement;
        if (iframe) {
          iframe.style.height = event.data.height + "px";
        }
      }
    }

    const iframe = document.getElementById("grade-dist-iframe") as HTMLIFrameElement;
    if (iframe) {
      window.addEventListener("message", resizeIframe);

      return () => {
        window.removeEventListener("message", resizeIframe);
      };
    }
  }, []);

  return (
    <div className='proj-color section-container'>
        <h1 className="section-title">A&M Grade Explorer</h1>
        <div>
          <p>
            The A&M Grade Explorer allows students to view grade distributions for any course at Texas A&M.
            The dashboard allows the user to select a specific course and select instructors to compare grade distriubutions and course
            evaluation results against each other. This allows students to make informed decisions about which courses to take and which to drop.
          </p>
          <p>
            The project is a full-stack web application build with React, Django, and PostgreSQL. The 
            front end is hosted on <a href="https://gradeexplorertamuapp-frontend.onrender.com/">Render</a>. The 
            data is publicly available and can be found here, and was used under the provided Creative Commons liscence. 
            The source code can be found on my Github page or at this <a href="https://github.com/calebelizondo/gradeExplorerTAMUApp">link</a>. 
          </p>
        </div>
        <div className="frame-container">
          <iframe id="grade-dist-iframe" src="https://gradeexplorertamuapp-frontend.onrender.com/" seamless></iframe>
        </div>
    </div>
  );
};

export default Projects;