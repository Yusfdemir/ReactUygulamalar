import React, { useState,useEffect} from 'react'
import './QuestionCard.css'

const QuestionCard = ({questionsData,score,setScore,count,setCount,modal,setModal,loading}) => {
    const[timer,setTimer]=useState(30);
    const approvedChoise=(e)=>{
        console.log(e.currentTarget.value)
        const checkAnswer= e.currentTarget.value == questionsData[count]?.correct_answer
        if(checkAnswer){
            setScore(score+100)
        }
        setCount(count+1)
        if(count==9){
            setModal(true)
        }
        setTimer(30)
    }
    
    useEffect(() => {
        const interval=setInterval(() => {
            if(timer>0){
                setTimer(timer-1)
            }
        }, 1000);
        
        if(timer==0 && count<10){
            setCount(count+1);
            setTimer(30)
        }

        else if(count>=10){
            setModal(true)
        }
        
        
        return ()=>{
            clearInterval(interval)
        }

    }, [timer])
    
  return (
    <div className='questionCard'>
        {
            !loading ? <div className='loader-container'><div className='loader'></div></div> :
            <>
            <div className='questionCard-timer'>{timer}</div>
            <div className='questionCard-title'>{count+1}/10 - {questionsData[count]?.question}</div>
            {
                questionsData[count]?.answers?.map((answer,i)=>(
                    <button key={i} value={answer} onClick={approvedChoise  }>{answer}</button>
                ))
            }
            </>
        }
        
    </div>
  )
}

export default QuestionCard