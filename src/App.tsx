import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Step1 from '@/pages/Step1'

import TestButton from '@/components/TestButton'

function App() {
  const [step, setStep] = useState('1');

  return (
    <div className="App">
      <header className="App-header">
        {step == '1' &&
          <Step1 />
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
