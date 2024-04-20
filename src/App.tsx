import React, { useState } from 'react';
import './App.css';

import { Question, questions } from '@/constants'

function App() {
  const ID_FIRST  = 1;
  const ID_LAST   = 20;

  const [step, setStep] = useState('1');
  const [undones, setUndones] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ]);

  /**
   * Get undone id in random.
   */
  function getUndoneRandom(): number {
    if (undones.length === 0) {
      return 0;
    }

    let rand = 0;
    do {
      rand = Math.floor(Math.random() * ID_LAST) + ID_FIRST;
    } while (!undones.includes(rand));

    return rand;
  }

  function getQuestion(id: number): Question {
    let ret = questions.find(val => {
      return val.id === id;
    });

    return ret as Question;
  }

  return (
    <div className="App">
      <div>당신에게 가장 잘 맞는 리눅스 배포판은?</div>
      <button>시작하기</button>
    </div>
  );
}

export default App;
