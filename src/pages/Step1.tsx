import React, { useState } from 'react'

import {
  StepKey,
  questions,
} from '@/constants'

import QuestionSelector from '@/components/QuestionSelector'

const Step1 = () => {
  const [question, setQuestion] = useState<number>(0);

  return (
    <div className="step-1">
      <p>{JSON.stringify(questions['s1' as StepKey][question])}</p>
      <QuestionSelector
        question={questions['s1'][question]}
        onSelect={(answer) => {
          setQuestion(question + 1);
        }}
      />
    </div>
  );
}

export default Step1
