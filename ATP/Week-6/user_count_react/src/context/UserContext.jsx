import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(prev => prev + 1);
  };

  return (
    <UserContext.Provider value={{ count, incrementCount }}>
      {children}
    </UserContext.Provider>
  );
};