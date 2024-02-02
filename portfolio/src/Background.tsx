import './Background.css'

const Background: React.FC = () => {
  return (
    <>
      <div className="background-container">

        <div style={{marginTop: '5%'}} className='rect timberwolf transparent'></div>
        <div style={{marginTop: '30%', marginLeft: '10%'}} className='rect wenge transparent'>
        </div>
      </div>
    </>
  );
};

export default Background;