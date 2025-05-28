import React,{ useState,useEffect } from 'react'
import QuestionList from './QuestionList'
import QuizCSS from './Quiz.css'
import Timer from "./Timer";

export default function Quiz() {
     const questions = [
        {
            question:"What is the capital of France?",
            options: ['Berlin','Madrid','Paris','Rome'],
            answer: "Paris"
        },
        {
            question:"Which planet is known as the Red Planet?",
            options: ['Venus','Saturn','Mars','Jupiter'],
            answer: "Mars"
        },
        {
            question:"Who wrote the play Romeo and Juliet?",
            options: ['William Wordsworth','William Shakespeare','Charles Dickens','George Orwell'],
            answer: "William Shakeespeare"
        },
        {
            question:"What is the chemical symbol of water?",
            options: ['CO2','O2','H2O','H2SO4'],
            answer: "H2O"
        },
        {
            question:"What is the largest ocean on Earth?",
            options: ['Atlantic Ocean','Arctic Ocean','Indian Ocean','Pacific Ocean'],
            answer: "Pacific Ocean"
        }
     ]
     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
     const [currentAnswer, setCurrentAnswer] = useState(null);
     const [score, setScore] = useState(0);
     const handleClick = (option) =>{
        setCurrentAnswer(option)
        if(option === questions[currentQuestionIndex].answer) {
            setScore(score+1)
        }  
     }
     const handleNextQuestion = ()=> {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setCurrentAnswer(null);
     }
    return (
        <div>
            {currentQuestionIndex <questions.length ? <div> 
            <QuestionList question={questions[currentQuestionIndex].question}
            options={questions[currentQuestionIndex].options} handleClick=
            {handleClick} currentAnswer={currentAnswer}/> 
            <button disabled={currentAnswer === null} className={currentAnswer === 
                null ? 'button-disable' : 'button'} onClick={handleNextQuestion}>Next</button>
        </div> : <div>Your Score is {score}</div>}
        </div>
    )}