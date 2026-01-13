import React from "react";
import "../styles/question.css"
import "../images/1.png"
import "../images/2.png"
import "../images/3.png"
import "../images/4.png"
import "../images/5.png"
import "../images/6.png"
import "../images/7.png"
import "../images/8.png"
import "../images/9.png"
import "../images/10.png"
import "../images/11.png"
function Question({ question, options, char, onAnswer, selectedAnswer }) {
  console.log(char)
  return (
    <div className="question-page">
      <img src={char} alt="Char"/>

      <h1>{question}</h1>
      {options.map((option, index) => (
        <button key={index} 
        onClick={() => onAnswer(option.score)}
        className={`button-74 ${selectedAnswer === option.score ? "selected" : ""}`}>
          {option.text}
        </button>
      ))}
    </div>
  );
}

export default Question;
