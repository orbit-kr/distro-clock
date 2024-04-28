import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  name: string;
}

interface AppContextType {
  numbers: number[];
  setNumbers: (numbers: number[]) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within an AppProvider with a value');
  return context;
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [numbers, setNumbers] = useState<number[]>([]);

  return (
    <AppContext.Provider value={{ numbers, setNumbers }}>
      {children}
    </AppContext.Provider>
  );
};

