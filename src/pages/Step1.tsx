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
    </div>
  );
}

export default Step1
