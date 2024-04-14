import React from 'react'

import { Question } from '@/constants'

import './QuestionSelector.scss'

interface QuestionSelectorProps {
  question: Question;
  onSelect: (arg0: string) => void,
}

const QuestionSelector = (props: QuestionSelectorProps) => {
  return (
    <div className="question-selector">
      <div className="question">
        {props.question.question}
      </div>
      <div className="answers">
        <button className="first"
          onClick={() => {
            props.onSelect('1');
          }}
        >
          {props.question.answers.a1}
        </button>
        <button className="second"
          onClick={() => {
            props.onSelect('2');
          }}
        >
          {props.question.answers.a2}
        </button>
      </div>
    </div>
  );
}

export default QuestionSelector
