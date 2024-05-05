import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '@/components/AppContext';

const RandomListPage: React.FC = () => {
  const navigate = useNavigate();
  const { setNumbers, setCurrent } = useAppContext();

  useEffect(() => {
    const savedNumbers = localStorage.getItem('randomNumbers');
    const savedCurrent = localStorage.getItem('current');
    if (savedCurrent) {
      setCurrent(parseInt(savedCurrent, 10));
    } else {
      localStorage.setItem('current', '0');
      setCurrent(0);
    }

    if (savedNumbers) {
      setNumbers(JSON.parse(savedNumbers));
    } else {
      // .keys() 대신 Array.from을 사용하여 오류 해결
      const newNumbers = Array.from({length: 20}, (_, index) => index + 1)
                              .sort(() => Math.random() - 0.5);
      localStorage.setItem('randomNumbers', JSON.stringify(newNumbers));
      setNumbers(newNumbers);
    }

    navigate('/question');
  }, [navigate, setNumbers]);

  return <div>Loading...</div>;
};

export default RandomListPage;

