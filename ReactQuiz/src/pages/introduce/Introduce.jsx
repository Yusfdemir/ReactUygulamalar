import React,{useState} from 'react'
import './Introduce.css'
import Dropdown from '../../components/dropdown/Dropdown'
import { useNavigate } from 'react-router-dom'
import triviaLogo from '../../logo/trivia.png';
const Introduce = () => {
    const difficulty=["easy","medium","hard"]
    const [difficultyChange,setDifficultyChange]=useState("");
    const navigate=useNavigate()
    const TOTAL_QUESTİONS=10;

    const startQuiz=()=>{
      if(difficultyChange){
        navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTİONS}`)
      }
    }
  return (
    <div className='introduce'>
        <div className="introduce-container">
            <img src={triviaLogo} alt="" />
            <Dropdown data={difficulty} setDifficultyChange={setDifficultyChange} />
            <div className='introduce-btn' onClick={startQuiz}>Quize Başla</div>
        </div>
    </div>
  )
}

export default Introduce