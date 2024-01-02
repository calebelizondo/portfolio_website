import './Background.css'

const Background: React.FC = () => {
  return (
    <>
      <div className="background-container">

        <div style={{marginTop: '5%'}} className='rect light-blue transparent'></div>
        <div style={{marginTop: '30%', marginLeft: '10%'}} className='rect dark-blue transparent'>
        </div>
      </div>
    </>
  );
};

export default Background;