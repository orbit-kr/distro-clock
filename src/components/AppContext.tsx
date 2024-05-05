import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  name: string;
}

interface AppContextType {
  numbers: number[];
  setNumbers: (numbers: number[]) => void;
  current: number;
  setCurrent: (current: number) => void;
}


const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within an AppProvider with a value');
  return context;
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [current, setCurrent] = useState<number>(0);

  return (
    <AppContext.Provider value={{ numbers, setNumbers, current, setCurrent }}>
      {children}
    </AppContext.Provider>
  );
};

