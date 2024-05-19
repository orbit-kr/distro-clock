import React from 'react'
import './Result.scss'
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
      <div className="result-div">
        <div className='result-image-div'>
          <img className="result-image" src={process.env.PUBLIC_URL + "/img/" + params.id + ".jpg" } alt="logo" />
        </div>
        <div className='result-desc-div'>{result.desc}</div>

        <div className='result-bottom-div'>
          <div className='friends-div'>
            나랑 잘 맞는 배포판<br/>
            <div className='friends-image-div' onClick={() => window.location.href="./"+result.best}>
              <img className="friends-image" src={process.env.PUBLIC_URL + "/img/" + result.best + ".jpg" } alt="logo" />
            </div>
          </div>
          <div className='friends-div'>
            나랑 안맞는 배포판<br/>
            <div className='friends-image-div' onClick={() => window.location.href="./"+result.worst}>
              <img className="friends-image" src={process.env.PUBLIC_URL + "/img/" + result.worst + ".jpg" } alt="logo" />
            </div>
          </div>
        </div>
        <button className='bottom-button' onClick={clearLocalStorage}>다시하기</button>
      </div>

    </div>
  );
}

export default ResultPage
