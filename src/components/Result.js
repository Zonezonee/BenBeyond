import React, { useRef } from "react";
import "../styles/result.css"
import logo from "../images/logo.png"
function Result({season, seasonImage, restartQuiz }) {
  const imageRef = useRef(null);

  const saveImage = () => {
    if (imageRef.current) {
      const link = document.createElement('a');
      link.href = imageRef.current.src;
      link.download = `${season}-result.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className='borderedArea'>
      <div className="resultContainer">
        <div className='resultHeader'>
          <h3>Your Type</h3>
        </div>

        <div className='resultSeason'>
          <img src={seasonImage} alt={season} ref={imageRef} />
          <button className='saveImageBtn' onClick={saveImage} title="Save image">
            
          </button>
        </div>

        {/* <div className='resultPair'>

          <div className="pairLeft">
            <h4>Your perfect pair</h4>
            <h3>{compatible}</h3>
          </div>

          <div className='pairRight'>
            <img src={compatibleImage} alt={compatible} />
          </div>
        </div> */}
        <div className="credit">
          <a href="https://instagram.com/BenBeyond_/" target="_blank" rel="noopener noreferrer">Presented by </a>
          <a href="https://instagram.com/BenBeyond_/" target="_blank" rel="noopener noreferrer" className="underline">@BenBeyond</a>
        </div>
      </div>

      <button className='quizAgain' onClick={restartQuiz}>ทำแบบทดสอบอีกรอบ &gt;</button>
      <img src={logo} alt="logo" className="benlogo"/>
    </div>
  );
}

export default Result;
