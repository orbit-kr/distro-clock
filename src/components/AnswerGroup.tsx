import React from 'react'

interface AnswerGroupProps {
  answerFirst: string;
  answerSecond: string;
  selected: string | null;  // 'first' | 'second' | null
  onSelect: (value: string | null) => void,
}

const AnswerGroup = (props: AnswerGroupProps) => {
  return (
    <div
      className="answer-group"
    >
      <button
        className="first"
        onClick={() => {
          if (props.selected === 'first') {
            props.onSelect(null);
            return;
          }
          props.onSelect('first');
        }}
        style={{
          backgroundColor: props.selected === 'first' ? '#89C9F4' : '#89E5DD',
        }}
      >{props.answerFirst}</button>
      <button
        className="second"
        onClick={() => {
          if (props.selected === 'second') {
            props.onSelect(null);
            return;
          }
          props.onSelect('second');
        }}
        style={{
          backgroundColor: props.selected === 'second' ? '#89C9F4' : '#89E5DD',
        }}
      >{props.answerSecond}</button>
    </div>
  );
}

export default AnswerGroup
