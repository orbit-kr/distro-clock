import React from 'react'

import { Question, Weight } from '@/constants'

import './QuestionSelector.scss'

interface QuestionSelectorProps {
  question: Question;
  onSelect: (arg0: Weight) => void,
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
            props.onSelect(props.question.answers[0].weight);
          }}
        >
          {props.question.answers[0].answer}
        </button>
        <button className="second"
          onClick={() => {
            props.onSelect(props.question.answers[1].weight);
          }}
        >
          {props.question.answers[1].answer}
        </button>
      </div>
    </div>
  );
}

export default QuestionSelector
