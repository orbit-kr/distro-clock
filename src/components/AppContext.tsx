import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  name: string;
}

interface AppContextType {
  numbers: number[];
  setNumbers: (numbers: number[]) => void;
  current: number;
  setCurrent: (current: number) => void;
  selectedAnswers: string[];
  setSelectedAnswers: (selectedAnswers: string[]) => void;
}


const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within an AppProvider with a value');
  return context;
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [current, setCurrent] = useState<number>(() => {
    // localStorage에서 초기 current 값을 로드합니다.
    const savedCurrent = localStorage.getItem('current');
    return savedCurrent ? parseInt(savedCurrent, 10) : 0;
  });

  useEffect(() => {
    // current 상태가 변경될 때마다 localStorage에 저장합니다.
    localStorage.setItem('current', current.toString());
  }, [current]);  // current가 변경될 때만 실행됩니다.

  useEffect(() => {
    // selectedAnswers 상태가 변경될 때마다 localStorage에 저장합니다.
    localStorage.setItem('selectedAnswers', JSON.stringify(selectedAnswers));
  }, [selectedAnswers]);  // selectedAnswers가 변경될 때만 실행됩니다.

  return (
    <AppContext.Provider value={{ numbers, setNumbers, current, setCurrent, selectedAnswers, setSelectedAnswers}}>
      {children}
    </AppContext.Provider>
  );
};

