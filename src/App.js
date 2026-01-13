import React, {useState} from "react";
import Quiz from "./components/Quiz";
import logo from './images/logo.png';
import "./App.css"

const App = () => {
  const [showStartPage, setShowStartPage] = useState(true);

  const handleStartQuiz = () => {
    setShowStartPage(false);
  };

  const handleToStart = () => {
    setShowStartPage(true);
  };

  return (
    <div className="center-layout">
      <div className="container">
        {showStartPage ? (
          <div className="start-page">
            <img src={logo} alt="BenBeyond"/>

            <h1>What's your type of Seasons</h1>
            <h1>ฤดูของคุณคืออะไร</h1>
            
            <p>มาเริ่มทำความรู้จักตัวเองให้มากขึ้นไปด้วยกันน ~</p>
            <button onClick={handleStartQuiz}>ไปกันเลย!!!</button>
          </div>
        ) : (
          <Quiz backToStart={handleToStart}/>
        )}
      </div>
    </div>
  );
};

export default App;
