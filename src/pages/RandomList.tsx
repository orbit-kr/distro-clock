import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '@/components/AppContext';

const RandomListPage: React.FC = () => {
  const navigate = useNavigate();
  const { setNumbers, setSelectedAnswers } = useAppContext();

  useEffect(() => {
    const savedNumbers = localStorage.getItem('randomNumbers');
    const savedAnswers = localStorage.getItem('selectedAnswers');

    alert("savedAnswers" + savedAnswers)
    
    if (savedNumbers) {
      setNumbers(JSON.parse(savedNumbers));
      alert("savedNumbers" + savedNumbers)
    } else {
      // .keys() 대신 Array.from을 사용하여 오류 해결
      const newNumbers = Array.from({length: 20}, (_, index) => index + 1)
                              .sort(() => Math.random() - 0.5);
      localStorage.setItem('randomNumbers', JSON.stringify(newNumbers));
      setNumbers(newNumbers);
    }

    if (savedAnswers) {
      setSelectedAnswers(JSON.parse(savedAnswers));
    } else {
      setSelectedAnswers(Array.from({length: 20}, () => 'none'));      
    }


    navigate('/question');
  }, [navigate, setNumbers, setSelectedAnswers]);

  return <div>Loading...</div>;
};

export default RandomListPage;

