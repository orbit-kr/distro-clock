import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './App.css';
import { AppProvider } from './components/AppContext';
import { Question, questions } from '@/constants';

import "./fonts/Font.css";

function App() {
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수를 가져옵니다.
  
  const handleStartClick = () => {
    navigate('/random-list'); // 'random-list' 경로로 이동
  };
  
  useEffect(() => {
    // 뷰포트 높이를 기반으로 --vh 변수 설정
    const setVhVariable = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // 컴포넌트 마운트 시 한 번 실행
    setVhVariable();

    // 윈도우 크기 변경에 따라 --vh 변수 업데이트
    window.addEventListener('resize', setVhVariable);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener('resize', setVhVariable);
    };
  }, []);
  return (
  <AppProvider>
    <div className="App">
      <div className="title">당신에게 가장 잘 맞는<br/>리눅스 배포판은?</div>
      <div className='title-image-div'>
        <img className="title-image" src={process.env.PUBLIC_URL + "/img/titleImage.png"} alt="logo" />
      </div>
      <button className="start-button" onClick={handleStartClick}>시작하기</button>
    </div>
  </AppProvider>
  );
}

export default App;
