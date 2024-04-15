import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { Question, questions } from '@/constants'
import Step1 from '@/pages/Step1'
import QuestionSelector from '@/components/QuestionSelector'

import TestButton from '@/components/TestButton'

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
      <header className="App-header">
        {undones.length !== 0 &&
          <QuestionSelector
            question={getQuestion(getUndoneRandom())}
            onSelect={(weight) => {
              void(weight); // TODO: Do with weight.
            }}
          />
        }
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <TestButton />
    </div>
  );
}

export default App;
