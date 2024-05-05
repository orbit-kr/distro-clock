import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { Question, questions } from '@/constants'
import { useAppContext } from '@/components/AppContext';
import AnswerGroup from '@/components/AnswerGroup'

const QuestionPage = () => {
  const navigate = useNavigate();
  const { numbers, current, setCurrent, selectedAnswers, setSelectedAnswers } = useAppContext();
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  useEffect(() => {
    if (numbers.length === 0) {
      navigate('/random-list');
    }
    else {
      setSelectedAnswer(selectedAnswers.length > current ? selectedAnswers[current] : null);
    }
  }, [numbers, navigate]);

  // 공통 업데이트 함수
  const updateAnswerAndNavigate = (direction: 'next' | 'prev') => {


    const updatedAnswers = [...selectedAnswers];
    
    setSelectedAnswers(updatedAnswers);

    if (direction === 'next') {
      if (selectedAnswer === null) {
        alert('답을 선택해주세요');
        return;
      } else {
        updatedAnswers[current] = selectedAnswer;
      }
      if (current === numbers.length - 1) {
        navigate('/result/' + numbers.join(','));
      } else {
        setCurrent(current + 1);
        setSelectedAnswer(null);
      }
    } else if (direction === 'prev') {
      if (current === 0) {
        alert('첫 번째 문제입니다.');
      } else {
        if (selectedAnswer === null) {
          
        } else {
          updatedAnswers[current] = selectedAnswer;
        }
        setCurrent(current - 1);
        setSelectedAnswer(null);
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
