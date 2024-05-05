import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { Question, questions } from '@/constants'
import { useAppContext } from '@/components/AppContext';
import AnswerGroup from '@/components/AnswerGroup'
import { ProgressBar } from '@/components/ProgressBar'

const QuestionPage = () => {
  const navigate = useNavigate();
  const { numbers, current, setCurrent, selectedAnswers, setSelectedAnswers } = useAppContext();
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  useEffect(() => {
    if (numbers.length === 0) {
      navigate('/random-list');
    } else {
      const currentSelect = selectedAnswers.length >= current ? selectedAnswers[current] : null;
      setSelectedAnswer(currentSelect);
    }
  }, [numbers, navigate]);

  useEffect(() => {
    const currentSelect = selectedAnswers.length > current ? selectedAnswers[current] : null;
    setSelectedAnswer(currentSelect);
    //alert("selectedAnswers" + currentSelect);
  }, [current]);
  // 공통 업데이트 함수
  const updateAnswerAndNavigate = (direction: 'next' | 'prev') => {


    const updatedAnswers = [...selectedAnswers];
    
    setSelectedAnswers(updatedAnswers);

    if (direction === 'next') {
      if (selectedAnswer === null || selectedAnswer === '') {
        alert('답을 선택해주세요');
        return;
      } else {
        updatedAnswers[current] = selectedAnswer;
      }
      if (current === numbers.length - 1) {
        navigate('/calc-result');
      } else {
        setCurrent(current + 1);
      }
    } else if (direction === 'prev') {
      if (current === 0) {
        alert('첫 번째 문제입니다.');
      } else {
        if (selectedAnswer === null || selectedAnswer === '') {
          
        } else {
          updatedAnswers[current] = selectedAnswer;
        }
        setCurrent(current - 1);
      }
    }

    // const savedAnswers = localStorage.getItem('selectedAnswers');
    // alert("savedAnswers" + savedAnswers)
  };

  if (numbers.length === 0) {
    return null; // numbers가 초기화되지 않았다면 아무것도 렌더링하지 않음
  }

  const currentQuestion: Question = questions[numbers[current]-1];


  return (
    <div
      className="question-page"
    >
      <ProgressBar
        progress={(current + 1) / numbers.length * 100}
      />
      <div>{currentQuestion.question}</div>
      <AnswerGroup
        answerFirst={currentQuestion.answers[0].answer}
        answerSecond={currentQuestion.answers[1].answer}
        selected={selectedAnswer}
        onSelect={(value) => {
          setSelectedAnswer(value);
        }}
      />
      <div className="button-group">
        <button onClick={() => updateAnswerAndNavigate('prev')}>이전</button>
        <button onClick={() => updateAnswerAndNavigate('next')}>다음</button>
      </div>
    </div>
  );
}

export default QuestionPage
