import { useState } from "react";
import { AppContext } from "./AppContext";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const AppProvider: React.FC<Props> = ({ children }) => {
  const [count, setCount] = useState(0);

  const onChangeCount = (newCount: number) => {
    setCount(newCount);
  };

  return (
    <AppContext.Provider value={{ count, onChangeCount }}>
      {children}
    </AppContext.Provider>
  );
};
