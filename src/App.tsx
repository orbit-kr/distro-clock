import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './App.css';
import { AppProvider } from './components/AppContext';
import { Question, questions } from '@/constants'

function App() {
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수를 가져옵니다.
  
  const handleStartClick = () => {
    navigate('/random-list'); // 'random-list' 경로로 이동
  };

  return (
  <AppProvider>
    <div className="App">
      <div>당신에게 가장 잘 맞는 리눅스 배포판은?</div>
      <button onClick={handleStartClick}>시작하기</button>
    </div>
  </AppProvider>
  );
}

export default App;
