import React from 'react'
import { useParams } from 'react-router-dom'
import { Result, results } from '@/constants'


const ResultPage = () => {
  const params = useParams();
  const result = results[params.id as keyof Result];
  return (
    <div
      className="result-page"
    >
      <div>결과는?</div>
      <div>당신은 {params.id} 유형입니다!</div>
      <div>당신에게 어울리는 배포판은 {result.name} 입니다.</div>
      <div>"이미지"</div>
      <div>{result.desc}</div>
    </div>
  );
}

export default ResultPage
