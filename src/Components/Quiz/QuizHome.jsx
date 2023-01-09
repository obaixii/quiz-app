import React, { useState } from 'react'
import "./Quiz.css"
import {questions} from "./Quiz"
function QuizHome() {

    const [activeQuestion,setActiveQuestion] = useState(0)
    const [score,setScore] = useState(0)
    const [finalResult, setFinalResult] = useState(false);
    const [percentage,setPercentage] = useState('')

    const quizQuestions = questions ;
    const {quizQuestion,options} = questions[activeQuestion] ;

    console.log(questions.length)
    const optionClicked = (isCorrect)=>{
        if(isCorrect){
            setScore(score+1)
        }

        if(activeQuestion + 1 < questions.length){
            setActiveQuestion(activeQuestion+1)
        }else{
            setFinalResult(true)
            setPercentage((score/questions.length)*100)
        }
    }

    const restartQuiz = ()=>{
        setScore(0)
        setActiveQuestion(0)
        setFinalResult(false)
    }
    return (
        <>
            {
                finalResult ?
                    <div className='finalResult'>
                        <div className="finalResultInner">
                            <div className='resultInner'>
                                <h4>You Scored {score} out {questions.length}</h4>
                                <h2>Percentage Achieved - {percentage}%</h2>
                                {
                                    percentage < 50 ? 
                                    <h4 style={{color:"red"}}>Try Again</h4> :
                                    <h4>Congratulations</h4>
                                }
                                <hr />
                                <button onClick={()=>restartQuiz()} className='btn my-btn'>Restart Quiz</button>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='QuizHome'>
                        <div className="QuizInner">
                            <div className='container'>
                                <div>
                                    <div style={{textAlign:"center",fontWeight:"bold"}}>Current Score : {score}</div>
                                    {/* Question div here */}
                                    <div className="row mb-3">
                                        <p className="col-12">Question <span className='Question-number'><span className='active-number'>{activeQuestion + 1}</span>/{questions.length}</span></p>
                                        <div className="col-12">
                                            <h4>{quizQuestions[activeQuestion].text}</h4>
                                        </div>
                                    </div>
                                    {/* Options div here */}
                                    <div className="row mb-3">
                                        <div className="col-12">
                                            <div className='col-12'>
                                                {options.map((option,id)=>{
                                                    return(
                                                        <button onClick={()=>optionClicked(option.isCorrect)} key={id} className="option-buttons">{option.text}</button>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn my-btn">Next Question</button>
                                </div>
                            </div>
                        </div>
                    </div>
            }


        </>
    )
}

export default QuizHome
