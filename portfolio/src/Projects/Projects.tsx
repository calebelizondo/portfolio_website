import "./Projects.css";

const Projects:React.FC = () => {
  return (
    <div className='light-brown section-container'>
        <h1 className="section-title">Projects</h1>

        <div className="frame-container">
          <iframe src="https://gradeexplorertamuapp-frontend.onrender.com/" seamless></iframe>
        </div>
    </div>
  );
};

export default Projects;