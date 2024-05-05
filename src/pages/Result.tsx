import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { Result, results } from '@/constants'
import { useAppContext } from '@/components/AppContext';


const ResultPage = () => {
  const params = useParams();
  const { setNumbers, setSelectedAnswers, setCurrent } = useAppContext();
  const navigate = useNavigate();

  const clearLocalStorage = () => {
    //clear local storage
    localStorage.removeItem('randomNumbers');
    localStorage.removeItem('selectedAnswers');
    localStorage.removeItem('current');

    //clear states
    setNumbers([]);
    setSelectedAnswers([]);
    setCurrent(0);

    //navigate to home
    navigate('/');
  }

  const result = results[params.id as keyof Result];
  return (
    <div
      className="result-page"
    >
      <div>결과는?</div>
      <div>당신은 {params.id} 유형입니다!</div>
      <div>당신에게 어울리는 배포판은 {result.name} 입니다.</div>
      <div>"이미지"</div>
      <div>{result.desc}</div>

      <button onClick={clearLocalStorage}>다시하기</button>
    </div>
  );
}

export default ResultPage
