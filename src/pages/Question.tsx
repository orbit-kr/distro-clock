import React, { useState } from 'react'

import { Question, questions } from '@/constants'

import AnswerGroup from '@/components/AnswerGroup'

const QuestionPage = () => {
  const currentQuestion: Question = questions[0];
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

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
    </div>
  );
}

export default QuestionPage
