import React from 'react'
import { useParams } from 'react-router-dom'

const ResultPage = () => {
  const params = useParams();

  return (
    <div
      className="result-page"
    >
      <div>결과는?</div>
      <div>당신은 {params.id} 유형입니다!</div>
    </div>
  );
}

export default ResultPage
