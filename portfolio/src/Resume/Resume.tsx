import './Resume.css';
import Logo from "./customLogo";

const Resume: React.FC = () => {
  return (
    <>
      <div className='light-brown section-container'>
          <h1 className="section-title">Resume</h1>
          <Logo id={1} source="python-logo.png" alt="python logo" />
      </div>
    </>
  );
};

export default Resume;
