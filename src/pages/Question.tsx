import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { Question, questions } from '@/constants'
import { useAppContext } from '@/components/AppContext';
import AnswerGroup from '@/components/AnswerGroup'

const QuestionPage = () => {
  const navigate = useNavigate();
  const { numbers, current, setCurrent } = useAppContext();
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  useEffect(() => {
    if (numbers.length === 0) {
      navigate('/random-list');
    }
  }, [numbers, navigate]);

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
        <button 
          onClick={() => {
            if (current === 0) {
              alert('첫 번째 문제입니다.');
              return;
            }
            setCurrent(current - 1);
            setSelectedAnswer(null);
          }}
          >
          이전
          </button>
        <button
          onClick={() => {
            if (selectedAnswer === null) {
              alert('답을 선택해주세요');
              return;
            }
            if (current === numbers.length - 1) {
              navigate('/result/' + numbers.join(','));
            } else {
              setCurrent(current + 1);
              setSelectedAnswer(null);
            }
          }}
        >
          다음
        </button>
          

        
      </div>
    </div>
  );
}

export default QuestionPage
