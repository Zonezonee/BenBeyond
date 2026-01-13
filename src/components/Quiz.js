import React, { useState } from "react";
import Question from "./Question";
import Result from "./Result";
import logo from "../images/logo.png"

import "../styles/quiz.css"

import Summer from '../images/Summer.png';
import Winter from '../images/Winter.png';
import Autumn from '../images/Autumn.png';
import Spring from '../images/Spring.png';
import char1 from '../images/1.png';
import char2 from '../images/2.png';
import char3 from '../images/3.png';
import char4 from '../images/4.png';
import char5 from '../images/5.png';
import char6 from '../images/6.png';
import char7 from '../images/7.png';
import char8 from '../images/8.png';
import char9 from '../images/9.png';
import char10 from '../images/10.png';
import char11 from '../images/11.png';

const questions = [
  {
    question: "ก่อนสอบคุณมักจะเป็นคนที่",
    char: char1,
    options: [
      { text: "อ่านมาตลอด วางแผนอย่างดี", score: {"Summer" : 0, "Winter" : 4, "Autumn" : 3, "Spring" : 0} },
      { text: "คอยติวให้เพื่อนในกลุ่ม", score: {"Summer" : 0, "Winter" : 2, "Autumn" : 4, "Spring" : 3} },
      { text: "ไม่เคยอ่านหนังสือ แต่เดินเข้าสอบอย่างมั่นใจ", score: {"Summer" : 4, "Winter" : 0, "Autumn" : 0, "Spring" : 3} },
      { text: "One night miracle", score: {"Summer" : 3, "Winter" : 0, "Autumn" : 0, "Spring" : 4} }
    ]
  },
  {
    question: "เวลาทำงานอ่านหนังสือ คุณมักจะชอบบรรยากาศแบบ",
    char: char2,
    options: [
      { text: "เงียบสงบ ไร้เสียงรบกวน", score: {"Summer" : 0, "Winter" : 4, "Autumn" : 3, "Spring" : 2} },
      { text: "เปิดเพลงสนุก ๆ ฟังคลอไปด้วย", score: {"Summer" : 4, "Winter" : 0, "Autumn" : 0, "Spring" : 3} },
      { text: "นั่งทำงานกับเพื่อน มีเสียงพูดคุยรายล้อม", score: {"Summer" : 3, "Winter" : 0, "Autumn" : 0, "Spring" : 4} },
      { text: "ตอนที่ฝนตกพรำ หรือที่ที่มีเสียงธรรมชาติ", score: {"Summer" : 0, "Winter" : 2, "Autumn" : 3, "Spring" : 4} }
    ]
  },
  {
    question: "คุณรู้สึกอย่างไรเมื่อต้องย้ายโรงเรียนใหม่",
    char: char3,
    options: [
      { text: "ปรับตัวช้า แต่พยายามเข้าใจ", score: {"Summer" : 0, "Winter" : 4, "Autumn" : 3, "Spring" : 0} },
      { text: "ตื่นเต้น ลุยและลองอะไรใหม่ทันที", score: {"Summer" : 3, "Winter" : 0, "Autumn" : 0, "Spring" : 4} },
      { text: "ระมัดระวัง และค่อย ๆ ปรับตัว", score: {"Summer" : 0, "Winter" : 3, "Autumn" : 4, "Spring" : 1} },
      { text: "มองว่าเป็นโอกาสในการทำความรู้จักกับคนใหม่ๆ", score: {"Summer" : 4, "Winter" : 0, "Autumn" : 1, "Spring" : 2} },
    ]
  },
  {
    question: "เวลาต้องตัดสินใจเรื่องสำคัญ คุณมักจะ…",
    char: char4,
    options: [
      { text: "ใช้เวลาไตร่ตรองอย่างรอบคอบ", score: {"Summer" : 0, "Winter" : 4, "Autumn" : 3, "Spring" : 0} },
      { text: "ตัดสินใจเร็วตามความรู้สึก", score: {"Summer" : 3, "Winter" : 0, "Autumn" : 0, "Spring" : 4} },
      { text: "รอจนกว่าทุกอย่างจะชัดเจน", score: {"Summer" : 0, "Winter" : 3, "Autumn" : 4, "Spring" : 1} },
      { text: "ปรึกษาคนรอบข้างก่อนทำ", score: {"Summer" : 4, "Winter" : 1, "Autumn" : 2, "Spring" : 0} }
    ]
  },
  {
    question: "ถ้าเพื่อนลืมของสำคัญไว้ในห้องเรียน คุณจะ…",
    char: char5,
    options: [
      { text: "เก็บไว้ให้เรียบร้อย แล้วส่งคืนให้", score: {"Summer" : 0, "Winter" : 4, "Autumn" : 3, "Spring" : 0} },
      { text: "แซวขำ ๆ แล้วถ่ายรูปส่งไปแชต", score: {"Summer" : 4, "Winter" : 0, "Autumn" : 0, "Spring" : 3} },
      { text: "รีบวิ่งเอาไปคืนให้ทันที", score: {"Summer" : 3, "Winter" : 0, "Autumn" : 0, "Spring" : 4} },
      { text: "ทักบอกในกลุ่ม แล้วรอดูว่ามีใครอยู่แถวนั้นไหม", score: {"Summer" : 0, "Winter" : 2, "Autumn" : 4, "Spring" : 1} }
    ]
  },
  {
    question: "เมื่อมีงานที่ต้องส่งด่วน คุณจะ…",
    char: char6,
    options: [
      { text: "ทำเสร็จตั้งแต่เนิ่น ๆ ไม่รอให้ใกล้เดดไลน์", score: {"Summer" : 0, "Winter" : 4, "Autumn" : 3, "Spring" : 0} },
      { text: "ทำตอนสุดท้ายแต่ยังชิล", score: {"Summer" : 3, "Winter" : 4, "Autumn" : 3, "Spring" : 0} },
      { text: "ลนแต่ก็ยังทำออกมาดี", score: {"Summer" : 4, "Winter" : 0, "Autumn" : 0, "Spring" : 3} },
      { text: "ขอให้เพื่อนช่วยตรวจให้ก่อนส่ง", score: {"Summer" : 0, "Winter" : 2, "Autumn" : 4, "Spring" : 1} }
    ]
  },
  {
    question: "ถ้ามีเวลาว่างสุดสัปดาห์ คุณมักจะเลือกทำอะไร",
    char: char7,
    options: [
      { text: "อยู่บ้านอ่านหนังสือ ดูซีรีส์ หรือจัดห้องให้เรียบร้อย", score: {"Summer" : 0, "Winter" : 4, "Autumn" : 3, "Spring" : 0} },
      { text: "นัดเพื่อนไปเที่ยว เดินเล่น หรือคาเฟ่ฮอปปิ้ง", score: {"Summer" : 4, "Winter" : 0, "Autumn" : 0, "Spring" : 3} },
      { text: "ทำกิจกรรมอาสา หรือช่วยเหลือคนรอบตัว", score: {"Summer" : 3, "Winter" : 0, "Autumn" : 4, "Spring" : 1} },
      { text: "คิดโปรเจ็กต์ใหม่ ๆ หรือลองทำสิ่งที่ไม่เคยทำมาก่อน", score: {"Summer" : 0, "Winter" : 0, "Autumn" : 1, "Spring" : 4} }
    ]
  },
  {
    question: "เวลามีคนมาขอคำปรึกษา คุณมักจะ…",
    char: char8,
    options: [
      { text: "ฟังอย่างตั้งใจและให้คำแนะนำอย่างนุ่มนวล", score: {"Summer" : 4, "Winter" : 0, "Autumn" : 3, "Spring" : 1} },
      { text: "พยายามคิดหาเหตุผลและช่วยวางแผนแก้ปัญหาให้", score: {"Summer" : 0, "Winter" : 4, "Autumn" : 2, "Spring" : 0} },
      { text: "ให้กำลังใจแบบสนุก ๆ หรือชวนไปทำอย่างอื่นให้ลืมเรื่องเครียด", score: {"Summer" : 3, "Winter" : 0, "Autumn" : 0, "Spring" : 4} },
      { text: "พูดตรง ๆ แบบไม่อ้อมค้อมแม้อีกฝ่ายอาจจะน้อยใจ", score: {"Summer" : 0, "Winter" : 3, "Autumn" : 1, "Spring" : 0} }
    ]
  },
  {
    question: "เวลามีคนไม่เห็นด้วยกับความคิดของคุณ คุณมักจะ…",
    char: char9,
    options: [
      { text: "พยายามอธิบายเหตุผลอย่างใจเย็น", score: {"Summer" : 3, "Winter" : 2, "Autumn" : 4, "Spring" : 0} },
      { text: "ยอมรับความคิดเห็นของอีกฝ่ายอย่างเข้าใจ", score: {"Summer" : 4, "Winter" : 0, "Autumn" : 3, "Spring" : 1} },
      { text: "เถียงกลับด้วยเหตุผล เพราะอยากให้เข้าใจในมุมของคุณ", score: {"Summer" : 0, "Winter" : 4, "Autumn" : 1, "Spring" : 0} },
      { text: "ปล่อยผ่าน ไม่ซีเรียส เพราะคิดว่าความคิดต่างก็เป็นเรื่องธรรมดา", score: {"Summer" : 3, "Winter" : 0, "Autumn" : 0, "Spring" : 4} }
    ]
  },
  {
    question: "เวลาทำงานกลุ่ม คุณมักจะ…",
    char: char10,
    options: [
      { text: "เสนอไอเดียใหม่ สร้างแรงบันดาลใจให้เพื่อน ๆ ", score: {"Summer" : 2, "Winter" : 0, "Autumn" : 1, "Spring" : 5} },
      { text: "เน้นกระตุ้นให้เพื่อนในกลุ่มลงมือทำ", score: {"Summer" : 5, "Winter" : 0, "Autumn" : 0, "Spring" : 3} },
      { text: "จัดระบบ แจกจ่ายงานให้ทุกคนอย่างเหมาะสม", score: {"Summer" : 0, "Winter" : 3, "Autumn" : 5, "Spring" : 0} },
      { text: "คอยฟังความคิดเห็นทุกคน เพื่อลดความขัดแย้ง", score: {"Summer" : 0, "Winter" : 5, "Autumn" : 2, "Spring" : 0} }
    ]
  },
  {
    question: "ถ้าเพื่อนกำลังท้อแท้ คุณมักจะ…",
    char: char11,
    options: [
      { text: "ให้กำลังใจด้วยคำพูดดี ๆ หรือชวนทำสิ่งที่สนุก", score: {"Summer" : 2, "Winter" : 0, "Autumn" : 1, "Spring" : 5} },
      { text: "ดึงเพื่อนออกจากความเศร้า ชวนให้เพื่อนฮึดสู้อีกครั้ง", score: {"Summer" : 5, "Winter" : 0, "Autumn" : 1, "Spring" : 3} },
      { text: "อยู่ข้าง ๆ อย่างเงียบ ๆ คอยช่วยเรื่องเล็กน้อย", score: {"Summer" : 0, "Winter" : 3, "Autumn" : 5, "Spring" : 0} },
      { text: "ฟังอย่างเข้าใจ และให้คำปรึกษาอย่างใจเย็น", score: {"Summer" : 0, "Winter" : 5, "Autumn" : 2, "Spring" : 0} }
    ]
  },
];

const seasons = {
  "Summer": { 
    image: Summer
  },
  "Winter": { 
    image: Winter
  },
  "Autumn": { 
    image: Autumn
  },
  "Spring": { 
    image: Spring
  },
};

function Quiz({backToStart}) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Track the selected answer
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null)); // per-question answers

  const [scores, setScores] = useState({
    Summer: 0,
    Winter: 0,
    Autumn: 0,
    Spring: 0,
  });
  const [result, setResult] = useState(null);

  function handleClick(ans) {
    // Update scores: remove previous answer for this question (if any), then add new one
    setScores((prevScores) => {
      const newScores = {...prevScores};
      const prevAns = selectedAnswers[currentQuestion];
      if (prevAns) {
        newScores["Summer"] -= prevAns.Summer || 0;
        newScores["Winter"] -= prevAns.Winter || 0;
        newScores["Autumn"] -= prevAns.Autumn || 0;
        newScores["Spring"] -= prevAns.Spring || 0;
      }
      newScores["Summer"] += ans.Summer || 0;
      newScores["Winter"] += ans.Winter || 0;
      newScores["Autumn"] += ans.Autumn || 0;
      newScores["Spring"] += ans.Spring || 0;
      return newScores;
    });

    // Save this answer for the current question
    setSelectedAnswers((prev) => {
      const arr = [...prev];
      arr[currentQuestion] = ans;
      return arr;
    });

    setSelectedAnswer(ans); // Mark the new answer as selected (for UI)
  }

  function handleNextQuestion() {
    if (currentQuestion + 1 < questions.length) {
      const nextIndex = currentQuestion + 1;
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(selectedAnswers[nextIndex] || null); // Reset selected answer for the next question
    } else {
      calculateResult();
    }
  }

  function calculateResult() {
    let maxSeason = null;
    let maxScore = 0;

    for (const [season, score] of Object.entries(scores)) {
      if (score > maxScore) {
        maxSeason = season;
        maxScore = score;
      }
    }

    setResult(maxSeason);
  }

  function restartQuiz() {
    setCurrentQuestion(0);
    setSelectedAnswers(Array(questions.length).fill(null));
    setScores({
    Summer: 0,
    Winter: 0,
    Autumn: 0,
    Spring: 0,
  });
    setSelectedAnswer(null);
    setResult(null);
  }

  function handleBackButton() {
    if (currentQuestion > 0) {
      // If there is an answer selected for the current question, remove its score (user wants to "undo" it)
      const currIndex = currentQuestion;
      const currAns = selectedAnswers[currIndex];

      if (currAns) {
        setScores((prevScores) => {
          const newScores = {...prevScores};
          newScores["Summer"] -= currAns.Summer || 0;
          newScores["Winter"] -= currAns.Winter || 0;
          newScores["Autumn"] -= currAns.Autumn || 0;
          newScores["Spring"] -= currAns.Spring || 0;
          return newScores;
        });

        setSelectedAnswers((prev) => {
          const arr = [...prev];
          arr[currIndex] = null;
          return arr;
        });
      }

      const prevIndex = currentQuestion - 1;
      setCurrentQuestion(prevIndex);
      setSelectedAnswer(selectedAnswers[prevIndex] || null);
    } else {
      backToStart();
    }
  }

  if (result) {
    return (
      <Result
        season={result}
        description={seasons[result].description}
        seasonImage={seasons[result].image}
        restartQuiz={restartQuiz}
      />
    );
  }
  console.log(scores);
  return (
    <div className="quiz-container-with-next">
      <button className="back-btn" onClick={handleBackButton}>
        &lt; ย้อนกลับ
      </button>
      <Question
        question={questions[currentQuestion].question}
        options={questions[currentQuestion].options}
        char={questions[currentQuestion].char}
        onAnswer={handleClick}
        selectedAnswer={selectedAnswer}
      />

      <button className="next-btn"
        onClick={handleNextQuestion}
        disabled={!selectedAnswer} // Disable the button until an answer is selected
      >
        ต่อไป &gt;
      </button>
      <a href="https://instagram.com/benbeyond_/"><img src={logo} alt="Benbeyond" className="logo"/></a>
    </div>
);
}

export default Quiz;
