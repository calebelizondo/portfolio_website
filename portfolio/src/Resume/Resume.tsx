import './Resume.css';
import Logo from "./customLogo";

const Resume: React.FC = () => {
  return (
    <>
      <div className='abt-color section-container'>
          <h1 className="section-title">Resume</h1>
          <div className="logo-container-large">            
            <Logo source="django.png" alt="django logo" />
            <Logo source="logo512.png" alt="react logo" />
            <Logo source="postgres.png" alt="postgresql logo" />
          </div>
          
      </div>
    </>
  );
};

export default Resume;
